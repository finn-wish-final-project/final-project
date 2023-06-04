from flask import Flask, request, jsonify, render_template
from test import Hello

app = Flask(__name__)

# 가상의 데이터베이스를 대신해 사용할 users 딕셔너리 
users = {}

# 회원가입 API 엔드포인트
@app.route('/singup', methods=['POST']) ## POST 방식으로 오는 입력만 받음
def signup():
    # POST 요청으로부터 필요한 정보를 get_json으로 받아옴
    data = request.get_json() 
    user_id = data['USER_ID']
    id_email = data['ID_EMAIL']
    password = data['PASSWORD']
    birth = data['BIRTH']
    user_name = data['USER_NAME']
    phone = data['PHONE']

    # 사용자 정보를 데이터베이스에 저장
    users[user_id] = id_email, password, birth, user_name, phone
    
    return jsonify({'message': '회원가입이 완료되었습니다.'})

# 로그인 API 엔드포인트
@app.route('/login', methods=['POST'])
def login():
    # POST 요청으로부터 필요한 정보를 받아옴
    data = request.get_json()
    user_id = data['USER_ID']
    id_email = data['ID_EMAIL']
    password = data['PASSWORD']
    birth = data['BIRTH']
    user_name = data['USER_NAME']
    phone = data['PHONE']

    # 사용자 정보를 데이터베이스에서 검증
    if user_id in users and users[user_id] == id_email and password and birth and user_name and phone:
        # 로그인 성공 시 세션 또는 토큰 생성
        session_token = generate_session_token() # 세션 토큰 생성 함수 호출

        # 세션 또는 토큰을 클라이언트에 전달
        return jsonify({'message': '로그인 성공', 'session_token': session_token})
    else:
        return jsonify({'message': '로그인 실패'})
    
def generate_session_token():
    # 세션 또는 토큰 생성 로직을 구현하여 적절한 값을 반환
    return 'example_token'

if __name__ == '__main__':
    app.run()
### models.py
# import pymysql
# def users_info():
#     conn = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', pw='', charset='utf8')
#     curdic = conn.cursor(pymysql.cursors.DictCursor)
#     sql = "SELECT * FROM USER_ID"
#     curdic.execute(sql)
#     users_data = curdic.fetchall()
#     return users_data 

### app.py
# from flask import Flask, jsonify
# from models import users_info

# @app.route('/test')
# def test():
#     data = users_info()
#     return jsonify(data)

### runserver.py
# from flask import Flask
# from app import app

# if __name__ == "__main__":
#     app.run(host='localhost', port='5000', debug=True)

## python runserver.py
## 웹에서 json 형태로 데이터 잘 출력되는지 확인

## app 선언 아래에 아래 코드를 설정하여 jsonify 한글 인코딩 변경으로 인한 비정상 출력 문제 해결
## app.config['JSON_AS_ASCII'] = False
    
def hello_flask():
    return Hello

if __name__ == '__main__':
    app.run(host='localhost', port=5000) 