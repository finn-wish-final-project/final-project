from flask import Flask,render_template,request,Response,jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager,create_access_token
import pymysql

from validation.validation import email_validation,password_validation,name_validation

## jwt 확인:https://m.blog.naver.com/shino1025/221954027152

host = 'localhost'
user = 'root'
password = 'tyt7539695'
database = 'finnwish'

app=Flask(__name__)
app.config["JWT_SECRET_KEY"]="finnwishprojectjwtsecretkey"
bcrypt=Bcrypt(app)
jwt=JWTManager(app)
## 홈화면 정보
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
  print(result)
  if bcrypt.check_password_hash(result[0]['password'], user_pw):
    return jsonify(username=result[0]['name'],
    access_token=create_access_token(identity=user_email, expires_delta=False),
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

      query=f"insert into userlogin (email,password,birth,name,phone) values (%s,%s,%s,%s,%s);"
      conn.execute(query,(user_email,hash_pw,user_birth,user_name,user_phone))
      connection.commit()
      connection.close()
      return jsonify(msg="회원가입이 완료되었습니다.")

    else:
      connection.close()
      return jsonify(msg="중복아이디가 존재합니다.")

  else:
    return jsonify(msg="로그인 폼에 맞게 작성해주세요.")
  
@app.route('/')
def app_home():
  page=f"""
  <h1> hello </h1>
  """
  return page

if __name__=='__main__':
  app.run(debug=True, host='localhost', port=5000)