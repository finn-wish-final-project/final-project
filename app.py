from flask import Flask,render_template,request,Response,jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager,create_access_token,jwt_required,get_jwt_identity
import pymysql
from dotenv import load_dotenv
from datetime import timedelta
import numpy as np
from sklearn.metrics import mean_squared_error
import os 
import ast

from validation.validation import email_validation,password_validation,name_validation

## jwt 확인:https://m.blog.naver.com/shino1025/221954027152

load_dotenv()

host = os.environ.get('DB_HOST')
user = os.environ.get('DB_USER')
password = os.environ.get('DB_PASSWORD')
database = os.environ.get('DB_DATABASE')
ip=os.environ.get('IP')

app=Flask(__name__)
app.config["JWT_SECRET_KEY"]=os.environ.get('JWT_HASH')
app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(hours=24)
bcrypt=Bcrypt(app)
jwt=JWTManager(app)



## 매점

################## 챌린지 추천 코드################################
# 1:등록금  2:해외여행  3:효도  4:청약  5:모의  6:교육
R=np.array([[2.5,np.NaN,3.5,np.NaN,np.NaN,2.5],
          [np.NaN,4.5,np.NaN,np.NaN,2,np.NaN],
          [np.NaN,np.NaN,2.5,1.5,np.NaN,1],
          [1.5,4.5,np.NaN,2,3,np.NaN],
          [np.NaN,np.NaN,np.NaN,np.NaN,np.NaN,2.5]])

num_user, num_items=R.shape

K=2   # 행렬 분해 갯수
np.random.seed(1)

P=np.random.normal(scale=1./K, size=(num_user, K))
Q=np.random.normal(scale=1./K, size=(num_items, K))

# R>0 인 행 위치, 열 위치, 값을 non_zeros 리스트에 저장
non_zeros = [(i,j,R[i,j]) for i in range(num_user) for j in range(num_items) if R[i,j]>0]

def get_rmse(R,P,Q, non_zeros):
  error=0
  # 두개의 분해된 행렬 P와 Q.T의 내적으로 예측 R 행렬 생성
  full_pred_matrix= np.dot(P,Q.T)
  
  # 실제 R 행렬에서 널이 아닌 값의 위치 인덱스 추출하여 실제 R 행렬과 예측 행렬의 RMSE추출
  x_non_zero_ind=[non_zero[0] for non_zero in non_zeros]
  y_non_zero_ind=[non_zero[1] for non_zero in non_zeros]
  R_non_zeros = R[x_non_zero_ind, y_non_zero_ind]
  full_pred_matrix_non_zeros = full_pred_matrix[x_non_zero_ind, y_non_zero_ind]
  
  mse=mean_squared_error(R_non_zeros, full_pred_matrix_non_zeros)
  rmse= np.sqrt(mse)
  
  return rmse

steps=900
learning_rate=0.01
r_lambda=0.01

# SGD 기법으로 P와 Q 매트릭스를 계속 업데이트
for step in range(steps):
  
  for i,j,r in non_zeros:
    # 실제 값과 예측 값의 차이인 오류 값 구함
    eij=r-np.dot(P[i,:],Q[j,:].T)
    # Regularization을 반영한 SGD 업데이트 공식 적용
    P[i,:]=P[i,:]+learning_rate*(eij * Q[j,:] - r_lambda*P[i,:])
    Q[j,:]=Q[j,:]+learning_rate*(eij * P[i,:] - r_lambda*Q[j,:])
    
  rmse=get_rmse(R,P,Q, non_zeros)

pred_matrix= np.dot(P,Q.T)


#################################################################


################################Challenge API##############################

## 챌린지 추천
@app.route('/challenge', methods=['GET','POST'])
@jwt_required()
def challenge():
  user_id=get_jwt_identity()
  
  challenge_index=user_id-1   # userid와 challenge 추천 결과값의 인덱스 값의 차이가 1나기때문에 -1 해줘야한다.

  real_matrix=R[challenge_index,:]    # 해당 유저의 행 뽑아냄
  predict_matrix=np.round(pred_matrix, 3)
  predict_matrix=pred_matrix[challenge_index,:]   # 해당 유저의 예측 행 뽑아냄

  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  cursor = connection.cursor(pymysql.cursors.DictCursor)

  sql = f'select name from userlogin where userid="{user_id}"'
  cursor.execute(sql)
  result = cursor.fetchall()
  connection.close()
  
  max_challenge=0
  max_index=0
  # 가장 높은 선호도 추출
  for i in range(len(real_matrix)):
    if np.isnan(real_matrix[i]) and (predict_matrix[i]>max_challenge):
      max_challenge=predict_matrix[i]
      max_index=i+1
      
  return jsonify({"chalid":max_index, "username":result[0]['name']})
  

## 챌린지 포인트
@app.route('/challenge/point', methods=['POST'])
@jwt_required()
def challenge_point():
  user_id=get_jwt_identity()
  data=request.get_json()
  point=data['point']
  chalid=data['chalid']

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)

  query1=f'select point,challenge from useract where userid="{user_id}";'
  conn.execute(query1)
  result=conn.fetchall()
  chal_list=result[0]['challenge']
  user_point=result[0]['point']

  # 유저가 참여한 챌린지가 없을때
  if chal_list == None:
    query=f'update useract set point={point},challenge="[{chalid}]" where userid="{user_id}";'
    conn.execute(query)
    connection.commit()
    connection.close()
    return jsonify(msg="챌린지가 시작되었습니다.")
  else:
    point=user_point+point
    chal_list=ast.literal_eval(chal_list)
    if chalid in chal_list:
      return jsonify(msg="이미 참여중인 챌린지 입니다.")
    else:
      chal_list.append(chalid)
      query2=f'update useract set point={point},challenge="{chal_list}" where userid="{user_id}";'
      conn.execute(query2)
      connection.commit()
      connection.close()

      return jsonify(msg="챌린지가 시작되었습니다.")

#############################################################################

## 마이페이지
@app.route('/mypage', methods=['POST'])
@jwt_required()
def mypage():
    current_user = get_jwt_identity()
    connection = pymysql.connect(host=host, user=user, password=password, database=database)
    cursor = connection.cursor(pymysql.cursors.DictCursor)

    join_sql = f"""SELECT userlogin.email,userlogin.name, useract.point FROM userlogin 
    INNER JOIN useract ON userlogin.userid = useract.userid WHERE userlogin.userid={current_user}"""
    cursor.execute(join_sql)
    join_data = cursor.fetchall()
    connection.close()

    if join_data[0] != None:
        return jsonify(join_data)
    else:
        return jsonify({'msg':'다시 로그인 해주세요.'})


######################################################################################################


###################################### Board API ######################################################
# 게시판 저장
@app.route('/board/save', methods=['GET','POST'])
@jwt_required()
def save_board():
  data=request.get_json()
  print(data)
  chal_type=data['chal_type'] # 1:저축, 2:투자, 3:교육
  title=data['title']
  contents=data['contents']
  user_id=get_jwt_identity()

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'insert into board (title,contents,userid,chaltype) values (%s,%s,%s,%s);'
  conn.execute(query,(title,contents,user_id,chal_type))
  connection.commit()
  connection.close()
  return jsonify(msg='게시글 저장이 완료되었습니다.')

# 게시글 보여주기
@app.route('/board', methods=['GET','POST'])
@jwt_required()
def board_home():
  user_id=get_jwt_identity()
  data=request.get_json()
  board_type=data['chal_type']  # 1:저축, 2:투자, 3:교육

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'SELECT board.boardid,board.userid,board.title,board.contents,userlogin.name FROM board INNER JOIN userlogin ON board.userid = userlogin.userid where chaltype={board_type} ORDER BY boardid DESC;'
  conn.execute(query)
  result=conn.fetchall()

  if result==None:
    return jsonify(msg="게시물이 없습니다.")
  else:
    return jsonify({'result':result,'access_token':user_id})

# 게시판 수정
@app.route('/board/update' ,methods=['GET','POST'])
@jwt_required()
def board_update():
  user_id=get_jwt_identity()
  data=request.get_json()
  boardid=data['boardid']
  title=data['title']
  contents=data['contents']
  userid=data['userid']
  print(data)
  print(user_id)

  # print(boardid,title,contents)
  
  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)

  query1=f'select userid from board where boardid={boardid};'
  conn.execute(query1)
  result=conn.fetchall()
  result=result[0]['userid']
  if result==user_id:
    query=f'update board set title="{title}", contents="{contents}" where boardid={boardid} and userid={user_id} ;'
    conn.execute(query)
    connection.commit()
    connection.close()

    return jsonify(msg="수정이 완료되었습니다")
  else:
    return jsonify(msg="수정 권한이 없습니다.")

# 게시물 삭제
@app.route('/board/delete', methods=['GET','POST'])
@jwt_required()
def board_delete():
  data=request.get_json()
  boardid=data['boardid']
  user_id=get_jwt_identity()
  print(data)
  print(boardid)

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)

  query1=f'select userid from board where boardid={boardid};'
  conn.execute(query1)
  result=conn.fetchall()
  # print(result)
  result=result[0]['userid']

  if result==user_id:
    query=f'delete from board where boardid={boardid};'
    conn.execute(query)
    connection.commit()
    connection.close()
    return jsonify(msg="삭제가 완료되었습니다.")
  else:
    connection.close()
    return jsonify(msg="삭제 권한이 없습니다.")


#######################################################################################################


######################################## UPDATE DB에 저장 #############################################

## 퀴즈풀면 사전에 저장
@app.route('/quiz/save' ,methods=['GET','POST'])
@jwt_required()
def save_word() :
  word_data=request.get_json()
  word_data=word_data['wordid']
  
  cur_user=get_jwt_identity()

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select point,dict from useract where userid="{cur_user}";'
  conn.execute(query)
  result=conn.fetchall()

  dict_list=result[0]['dict']
  point=result[0]['point']

  if dict_list==None:
    query2=f'update useract set dict="{word_data}",point={30} where userid={cur_user};'
    conn.execute(query2)
    connection.commit()
    connection.close()
    return jsonify(msg="단어가 사전에 저장되었습니다.")
  else:
    point=point+30
    dict_list=ast.literal_eval(dict_list)
    update_dict_list=dict_list+word_data
    update_dict_list=set(update_dict_list)
    update_dict_list=list(update_dict_list)
    query1=f'update useract set dict="{update_dict_list}",point={point} where userid={cur_user};'
    conn.execute(query1)
    connection.commit()
    connection.close()
    return jsonify(msg="단어가 사전에 저장되었습니다.")

# 뉴스 스크랩 - 저장
@app.route('/news/save', methods=['GET','POST'])
@jwt_required()
def save_scrap():
  news_id=request.get_json()
  news_id=news_id['newsid']
  cur_user=get_jwt_identity()

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select scrap from useract where userid="{cur_user}";'
  conn.execute(query)
  result=conn.fetchall()
  # print(result)
  scrap_list=result[0]['scrap']
  if scrap_list==None:
    query3=f'update useract set scrap="{[news_id]}" where userid={cur_user};'
    conn.execute(query3)
    connection.commit()
    connection.close()
    return jsonify(msg="스크랩 저장을 완료하였습니다.")
  else:
    scrap_list=set(ast.literal_eval(scrap_list))
    # print(scrap_list)
    scrap_list.add(int(news_id))
    scrap_list=list(scrap_list)
    query2=f'update useract set scrap="{scrap_list}" where userid={cur_user};'
    conn.execute(query2)
    connection.commit()
    connection.close()
    return jsonify(msg="스크랩 저장을 완료하였습니다.")

######################################################################################################



####################################### USERACT API ##################################################

## 뉴스스크랩-보기
@app.route('/news/show', methods=['GET','POST'])
@jwt_required()
def show_scrap():
  # data=request.get_json()
  # data=data['userid']
  cur_user=get_jwt_identity()
  # print(cur_user)

  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select scrap from useract where userid="{cur_user}";'
  conn.execute(query)
  result=conn.fetchall()
  user_scrap=result[0]['scrap']
  # print(cur_user,"요청:",user_scrap)
  if user_scrap==None:
    connection.close()
    return jsonify(msg="등록된 스크랩이 없습니다.")
  else:
    user_scrap=user_scrap.replace("[","(").replace("]",")")
    # print(user_scrap)
    query1=f'select title,article from news where newsid in {user_scrap};'    # 뉴스 db에서 useract에 scrap에 있는 배열안에 newsid들로 검색
    conn.execute(query1)
    news_list=conn.fetchall()
    # print(news_list)
    connection.close()
    return jsonify(news_list)


## user 사전보기
@app.route('/dict', methods=['GET','POST'])
@jwt_required()
def dictionary():
  # data=request.get_json()
  # data=data['userid']
  cur_user=get_jwt_identity()
  # print(cur_user)

  connection= pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select dict from useract where userid="{cur_user}";'
  conn.execute(query)
  result=conn.fetchall()
  user_dict=result[0]['dict']
  # print(user_dict)


  # 유져 dict안에 값이 없으면
  if user_dict==None:
    connection.close()
    return jsonify(msg="등록된 단어가 없습니다.")
  # 유져 dict안에 값이 있으면
  else:
    user_dict=user_dict.replace("[","(").replace("]",")")
    query1=f'select title,subtitle from dict where wordid in {user_dict};'
    conn.execute(query1)
    dict_list=conn.fetchall()
    # print(dict_list)
    connection.close()
    return jsonify(dict_list)


## 퀴즈 던져주기
@app.route('/home/quiz', methods=['GET','POST'])
@jwt_required()
def home_quiz(): 
  cur_user=get_jwt_identity()

  connection=pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select dict from useract where userid="{cur_user}";'
  conn.execute(query)
  result=conn.fetchall()
  user_dict=result[0]['dict']
  # print(user_dict)
  if user_dict==None:
    query1=f'select * from dict where wordid in {(1,2,3)};'
    conn.execute(query1)
    quiz_list=conn.fetchall()
    connection.close()
    return jsonify(quiz_list)
  else:
    user_dict=user_dict.replace("[","(").replace("]",")")
    # print(user_dict)
    query2=f'select * from dict where wordid not in {user_dict} limit 3;'
    conn.execute(query2)
    quiz_list=conn.fetchall()
    connection.close()
    return jsonify(quiz_list)


######################################################################################################



###################################### HOME API ######################################################

## 홈-뉴스보기
@app.route('/home/news', methods=['GET','POST'])
@jwt_required()
def home_news():
  # data=request.get_json()
  # data=data['userid']
  cur_user=get_jwt_identity()
  # print(cur_user)

  connection=pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select dict from useract where userid="{cur_user}";'
  conn.execute(query)
  result=conn.fetchall()
  word_list=result[0]['dict']
  # 초기 사용자일때
  if word_list==None:
    query1=f'select title,article,newsid from news limit 1;'
    conn.execute(query1)
    result_news=conn.fetchall()
    connection.close()
    return jsonify(result_news)
  # 만약에 과거에 퀴즈까지 통과한 단어가 있을때.
  else:
    word_list=ast.literal_eval(word_list)
    news_num=int(len(word_list)/3)+1    # 자신이 가지고 있는 단어 리스트에 나누기 3을 하고 1을 더하면 필요한 뉴스가 나온다.
    query2=f'select newsid,title,article from news where newsid={news_num};'
    conn.execute(query2)
    news_result=conn.fetchall()
    connection.close()
    return jsonify(news_result)


# 홈화면 구현
@app.route('/home/word', methods=['GET','POST'])
@jwt_required()
def app_home():
  # data=request.get_json()
  # data=data['userid']
  # print(data)
  cur_user=get_jwt_identity()
  # print(cur_user)
  
  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select dict from useract where userid="{cur_user}"'
  conn.execute(query)
  result=conn.fetchall()
  # print(result)
  word_list=result[0]['dict']
  if word_list==None:
    query1=f'select title,subtitle from dict limit 3;'
    conn.execute(query1)
    result_word=conn.fetchall()
    connection.close()
    # print(result_word)
    return jsonify(result_word)
  else:
    dict_list=ast.literal_eval(result[0]['dict'])
    dict_list=dict_list[-1]
    query2=f'select title,subtitle from dict where wordid>{dict_list} limit 3;'
    conn.execute(query2)
    result_word=conn.fetchall()
    connection.close()
    return jsonify(result_word)


#####################################################################################################



################################# JWT TOKEN 필요X ####################################################

## 로그인
@app.route('/signin', methods=['POST'])
def signin():
  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
   ## json받아와서 인지값 넣기
  user_data=request.get_json()
  # print('json입력값:',user_data)
  user_email=user_data['email'].replace(" ", "")
  user_pw=user_data['password'].replace(" ", "")
  # print(user_email,user_pw)
  query_login=f"select * from userlogin where email= '{user_email}';"
  # print(query_login)
  conn.execute(query_login)
  result = conn.fetchall()
  connection.close()
  # print('db결과:',result) 
  if bcrypt.check_password_hash(result[0]['password'], user_pw):

    return jsonify(username=result[0]['name'],access_token=create_access_token(identity=result[0]['userid'] ),msg="로그인 되었습니다.")       # jwt토큰 보내줌
  else:
    return jsonify(msg="비밀번호가 틀렸습니다.") 


## 회원가입
@app.route('/signup', methods=['POST'])
def signup():

  ## db연결
  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)

  ## json받아와서 인지값 넣기
  user_data=request.get_json()
  print(user_data)
  user_email=user_data['email'].replace(" ", "")
  user_pw=user_data['password'].replace(" ", "")
  user_birth=user_data['birth'].replace(" ", "")
  user_name=user_data['name'].replace(" ", "")
  user_phone=user_data['phone'].replace(" ", "")
  
  # 유효성 검사
  if email_validation(user_email) and password_validation(user_pw) and name_validation(user_name):
    ## db에 중복 아이디 있는지 검사
    query=f"select * from userlogin where email= '{user_email}';"
    conn.execute(query)
    result=conn.fetchall()
    if len(result)<1:
      ## 비밀번호 hash 
      hash_pw=bcrypt.generate_password_hash(user_pw)

      default_image="./static/user_image/기본 프로필.png"
      query=f"insert into userlogin (email,password,birth,name,phone) values (%s,%s,%s,%s,%s);"
      query_act=f"insert into useract (point,userimage) values (%s,%s);"
      conn.execute(query,(user_email,hash_pw,user_birth,user_name,user_phone))
      conn.execute(query_act,(0,default_image))
      connection.commit()
      connection.close()
      
      return jsonify(msg="회원가입이 완료되었습니다.")

    else:
      connection.close()
      return jsonify(msg2="중복아이디가 존재합니다.")

  else:
    return jsonify(msg1="로그인 폼에 맞게 작성해주세요.")


#####################################################################################################

    

if __name__=='__main__':
  app.run(debug=True, host=ip, port=5000)

  