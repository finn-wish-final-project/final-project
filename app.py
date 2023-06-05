from flask import Flask, request, jsonify, render_template
import pymysql
# from test import Hello


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

# 회원가입 API 엔드포인트
@app.route('/singup', methods=['POST']) ## POST 방식으로 오는 입력만 받음
def signup():
    # POST 요청으로부터 필요한 정보를 get_json으로 받아옴
    data = request.get_json() 
    user_id = data['ID_EMAIL']
    user_pw = data['PASSWORD']
    user_birth = data['BIRTH']
    user_name = data['USER_NAME']
    user_phone = data['PHONE']
   
    # 유효성 검사 
    if email_validation(user_id) and email_overlap(user_id) and pw_validation(user_pw) and name_validation(user_name) and birth_validation(user_birth) and phone_validation(user_phone):
        return jsonify({'message': '회원가입이 완료되었습니다.'})
    else:
        return jsonify({'message': '양식에 맞게 다시 입력해 주세요.'})

# 올바른 이메일 형식인지 확인
def email_validation(email):
    email = email
    if '@' in email and  5 < len(email) < 30:
        return True
    else:
        return False
# 중복 이메일 주소 가입 방지    
def email_overlap(email):
    email = email
    connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', pw='1807992102', charset='utf8')
    cursor = connection.cursor(pymysql.cursors.DictCursor)
    sql = "SELECT * FROM USER_ID"
    cursor.execute(sql, (email))
    result = cursor.fetchall()
    if result:
        return False, jsonify({'message': '이미 사용 중인 이메일 주소입니다.'})
    else:
        return True
# 최소 비밀번호 길이 확인
def pw_validation(password):
    password=password
    if len(password) >= 4:
        return True
    else: 
        return False, jsonify({'message': '비밀번호를 4자 이상 입력해 주세요.'})
# 유저 이름 입력 정보 확인
def name_validation(name):
    name=name
    if len(name) >= 1:
        return True 
    else:
        return False, jsonify({'message':'이름을 1자리 이상 입력해 주세요.'})
# 생일 6자리로 입력 확인
def birth_validation(birth):
    birth=birth
    if len(birth) == 6:
        return True 
    else:
        return False, jsonify({'message':'생일을 6자리 숫자로 입력해 주세요.'})
# 전화번호 양식 확인
def phone_validation(phone):
    phone=phone
    if 3 <= len(phone) <= 11:
        return True 
    else:
        return False, jsonify({'message':'( - ) 기호 없이 전화번호만 입력해 주세요'})


# 로그인 API 엔드포인트
@app.route('/login', methods=['POST'])
def login():
    connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', pw='1807992102', charset='utf8')
    cursor = connection.cursor(pymysql.cursors.DictCursor)

    data = request.get_json()
    user_id = data['ID_EMAIL']
    user_pw = data['PASSWORD']
    user_name = data['USER_NAME']

    sql = "SELECT * FROM USER_ID"
    cursor.execute(sql, (user_id, user_pw))

    result = cursor.fetchall()
    print (result)
   
    # 사용자 정보를 데이터베이스에서 검증
    if result: 
        return jsonify({'message': f'{user_name}님 반갑습니다.'})
    else:
        return jsonify({'message': '아이디 또는 비밀번호가 잘못 입력되었습니다.'})
    
if __name__ == "__main__":
    app.run(host='localhost', port='5000', debug=True)


# 코드를 작성한 파일을 실행하거나 flask run 명령을 사용하여 Flask 애플리케이션을 실행합니다.
# Postman, cURL 또는 웹 브라우저와 같은 도구를 사용하여 회원가입과 로그인 API 엔드포인트를 호출합니다.
# 회원가입에는 POST 요청을 /signup 엔드포인트로 보내고 필요한 데이터를 JSON 형식으로 전송합니다.
# 로그인에는 POST 요청을 /login 엔드포인트로 보내고 필요한 데이터를 JSON 형식으로 전송합니다.
# 각 API 엔드포인트는 요청을 받아 처리하고 응답으로 JSON 데이터를 반환합니다. 응답을 확인하여 예상된 메시지가 올바르게 반환되는지 확인할 수 있습니다.