from flask import Flask, request, jsonify, render_template
import pymysql

from validation import *

# from test import Hello


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# 회원가입 API 엔드포인트
@app.route('/signup', methods=['POST']) ## POST 방식으로 오는 입력만 받음
def signup():
    # POST 요청으로부터 필요한 정보를 get_json으로 받아옴
    data = request.get_json() 
    user_id = data['EMAIL']
    user_pw = data['PASSWORD']
    user_birth = data['USER_BIRTH']
    user_name = data['USER_NAME']
    user_phone = data['PHONE_NUM']
   
    # 유효성 검사 
    if email_validation(user_id) and email_overlap(user_id) and pw_validation(user_pw) and name_validation(user_name) and birth_validation(user_birth) and phone_validation(user_phone):
        connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', passwd='1807992102', charset='utf8')
        cursor = connection.cursor(pymysql.cursors.DictCursor)

        sql = "INSERT INTO USER_LOGIN (EMAIL, PASSWORD, USER_BIRTH, USER_NAME, PHONE) VALUES (%s, %s, %s, %s, %s)"
        cursor.execute(sql, (user_id, user_pw, user_birth, user_name, user_phone))
        connection.commit()
        
        connection.close()

        return jsonify({'message': '회원가입이 완료되었습니다.'})
    else:
        return jsonify({'message': '양식에 맞게 다시 입력해 주세요.'})
    
if __name__ == "__main__":
    app.run(host='localhost', port='5000', debug=True)

# 로그인 API 엔드포인트
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    user_id = data['EMAIL']
    user_pw = data['PASSWORD']
    user_name = data['USER_NAME']

    connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', passwd='1807992102', charset='utf8')
    cursor = connection.cursor(pymysql.cursors.DictCursor)

    sql = "SELECT * FROM USER_LOGIN WHERE EMAIL = %s AND PASSWORD = %s"
    cursor.execute(sql, (user_id, user_pw))
    result = cursor.fetchone()

    connection.close()
   
    # 사용자 정보를 데이터베이스에서 검증
    if result: 
        return render_template('login.html', user_name=user_name)
    # jsonify({'message': f'{user_name}님 반갑습니다.'})
    else:
        return jsonify({'message': '아이디 또는 비밀번호가 잘못 입력되었습니다.'})
    
if __name__ == "__main__":
    app.run(host='localhost', port='5000', debug=True)


# 코드를 작성한 파일을 실행하거나 flask run 명령을 사용하여 Flask 애플리케이션을 실행합니다.
# Postman, cURL 또는 웹 브라우저와 같은 도구를 사용하여 회원가입과 로그인 API 엔드포인트를 호출합니다.
# 회원가입에는 POST 요청을 /signup 엔드포인트로 보내고 필요한 데이터를 JSON 형식으로 전송합니다.
# 로그인에는 POST 요청을 /login 엔드포인트로 보내고 필요한 데이터를 JSON 형식으로 전송합니다.
# 각 API 엔드포인트는 요청을 받아 처리하고 응답으로 JSON 데이터를 반환합니다. 응답을 확인하여 예상된 메시지가 올바르게 반환되는지 확인할 수 있습니다.