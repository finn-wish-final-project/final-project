from flask import Flask,render_template,request,Response,jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager,create_access_token,jwt_required,get_jwt_identity
import pymysql
from dotenv import load_dotenv
import os 

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
bcrypt=Bcrypt(app)
jwt=JWTManager(app)

## 사전
## 스크랩
## 챌린지
## 마이페이지
## 매점
## 뉴스보기
  



## 사전정보



## 로그인
@app.route('/signin', methods=['POST'])
def signin():
  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
   ## json받아와서 인지값 넣기
  user_data=request.get_json()
  # print(user_data)
  user_email=user_data['email']
  user_pw=user_data['password']
  query=f"select * from userlogin where email= '{user_email}'; "
  conn.execute(query)
  result=conn.fetchall()
  connection.close()
  # print(result)
  if bcrypt.check_password_hash(result[0]['password'], user_pw):
    return jsonify(username=result[0]['name'],
    access_token=create_access_token(identity=result[0]['userid'] , expires_delta=False),
    msg="로그인 되었습니다.")
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
  # print(user_data)
  user_email=user_data['email']
  user_pw=user_data['password']
  user_birth=user_data['birth']
  user_name=user_data['name']
  user_phone=user_data['phone']
  
  ## 유효성 검사
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
      return jsonify(msg="중복아이디가 존재합니다.")

  else:
    return jsonify(msg="로그인 폼에 맞게 작성해주세요.")

# 홈화면 구현
@app.route('/home', methods=['GET','POST'])
# @jwt_required()
def app_home():
  data=request.get_json()
  data=data['userid']
  # cur_user=get_jwt_identity()
  
  connection = pymysql.connect(host=host, user=user, password=password, database=database)
  conn=connection.cursor(pymysql.cursors.DictCursor)
  query=f'select dict from useract where userid="{data}"'
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
    dict_list=int(result[0]['dict'][-2])
    query2=f'select title,subtitle from dict where wordid>{dict_list} limit 3;'
    conn.execute(query2)
    result_word=conn.fetchall()
    connection.close()
    return jsonify(result_word)
    


  

if __name__=='__main__':
  app.run(debug=True, host=ip, port=5000)

  