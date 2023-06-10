from flask import Flask, request, jsonify, render_template
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token 
from flask_jwt_extended import jwt_required,get_jwt_identity
import pymysql

from validation import *

default_image = './default_image.png'

app = Flask(__name__)
# jsonify 한글 인코딩이 변경되어 비정상 출력 문제 해결 코드
app.config['JSON_AS_ASCII'] = False

app.config['JWT_SECRET_KEY'] = 'SECRET_KEY'

app.config['BCRYPT_LEVEL'] = 10

bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# 홈화면 구현
# @app.route('/home', methods=['GET','POST'])
# @jwt_required()
# def app_home():
#     current_user = get_jwt_identity()

#     connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', passwd='1807992102', charset='utf8')
#     cursor = connection.cursor(pymysql.cursors.DictCursor)
#     sql = 'SELECT * FROM USER_ACT WHERE = USER_NUM = %s'





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
    hashed_pw = bcrypt.generate_password_hash(user_pw)
    # hashed_pw = bcrypt.hashpw(str(user_pw).encode('utf8'), bcrypt.gensalt())
    # generate_password_hash(): 주어진 비밀번호를 안전하게 해시화된 문자열로 변환 
    # -> 해시화된 비밀번호는 안전한 저장을 위해 데이터베이스에 저장됨
    
    # 유효성 검사 
    if email_validation(user_id) and email_overlap(user_id) and pw_validation(user_pw) and name_validation(user_name) and birth_validation(user_birth) and phone_validation(user_phone):
        connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', passwd='1807992102', charset='utf8')
        # pymysql.connect : MySQL 데이터베이스에 연결
        cursor = connection.cursor(pymysql.cursors.DictCursor)
        # connection.cursor : 연결된 데이터베이스에 대한 커서 객체 생성
        # pymysql.cursors.DictCursor : 딕셔너리 형태로 결과를 반환

        sql = "INSERT INTO USER_LOGIN (EMAIL, PASSWORD, USER_BIRTH, USER_NAME, PHONE_NUM) VALUES (%s, %s, %s, %s, %s);" 
        sql_act = "INSERT INTO USER_ACT (USER_POINT, USER_IMAGE) values (%s,%s);"
        # %s : 플레이스홀더, SQL 쿼리 실행 시 동적으로 값을 대체하는 데 사용 
        # sql : 삽일할 데이터를 포함하는 SQL 쿼리문 정의
        # INSERT INTO TABLE () : USER_LOGIN 테이블에 (각 컬럼) 해당되는 값을 삽입
        cursor.execute(sql, (user_id, hashed_pw, user_birth, user_name, user_phone))
        cursor.execute(sql_act,(0, default_image))
        # cursor.execute : 커서를 사용하여 SQL 쿼리문을 실행, 두 번째 매개변수에는 쿼리문의 플레이스홀더에 해당하는 값들 전달
        
        connection.commit()
        # 데이터베이스에 대한 변경 사항을 커밋(변경된 내용을 적용하는 작업)
        connection.close()
        # 데이터베이스 연결 닫기

        return jsonify({'message': '회원가입이 완료되었습니다.'})
        # 작업 완료 후 메시지를 JSON 형식으로 반환
    
    elif email_validation(user_id) == False:
        return jsonify({'message':'이메일 양식에 맞게 입력해주세요'})
    elif email_overlap(user_id) == False:
        return jsonify({'message': '이미 사용 중인 이메일 주소입니다.'})
    elif pw_validation(user_pw) == False:
        return jsonify({'message': '비밀번호를 4자 이상 입력해 주세요.'})
    elif name_validation(user_name) == False:
         return jsonify({'message':'이름을 입력해 주세요.'})
    elif birth_validation(user_birth) == False:
         return jsonify({'message':'생일을 6자리 숫자로 입력해 주세요.'})
    elif phone_validation(user_phone) == False:
         return jsonify({'message':'( - ) 기호 없이 전화번호만 입력해 주세요'})
    else:
        return jsonify({'message': '양식에 맞게 다시 입력해 주세요.'})
    
# 로그인 API 엔드포인트
@app.route('/login', methods=['POST'])
def login():
    connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', passwd='1807992102', charset='utf8')
    cursor = connection.cursor(pymysql.cursors.DictCursor)

    data = request.get_json()
    user_id = data['EMAIL']
    user_pw = data['PASSWORD']
    
    ## encoded_pw = str(user_pw).encode('utf8')
    # str 객체 내 메소드인 encode()를 이용하여 UTF-8 방식으로 인코딩 해준 값을 넣어줌
    # hashed_password = bcrypt.hashpw('password'.encode('utf8'), bcrypt.gensalt())
    ## hashed_pw = bcrypt.check_password_hash(encoded_pw, bcrypt.gensalt())
    # bcrypt.hashpw(): 인코딩 실시
    # 두번 째 파라미터 bcrypt.gensalt(): salt 값 설정
    
    # sql = f'SELECT * FROM USER_LOGIN WHERE EMAIL = "{user_id}"'
    sql = "SELECT * FROM USER_LOGIN WHERE EMAIL = %s"
    # SELECT *는 검색 결과로 모든 열을 반환하라는 의미
    # 이메일과 비밀번호가 일치하는 사용자의 모든 정보를 가져옴
    
    # cursor.execute(sql)
    cursor.execute(sql, (user_id,))
    db_data = cursor.fetchall()
    # 커서를 통해 실행된 쿼리결과에서 행(row)을 가져오는 메서드
    # 호출될 때마다 결과 집합에서 한 번에 하나의 행을 가져옴
    
    connection.close()

    ## encoded = jwt.encode(json, 'Secret Key', algorithm='HS256')
    # 인코딩 하고자 하는 dict 객체, 시크릿 키, 알고리즘 방식 삽입
    ## decoded = jwt.decode(encoded, 'Secret Key', algorithm='HS256')
    # 디코딩 하고자 하는 str 객체, 시크릿 키, 알고리즘 방식 삽입

    # 사용자 정보를 데이터베이스에서 검증
    if len(db_data) > 0: 
        result = bcrypt.check_password_hash(db_data[0]['PASSWORD'], user_pw)
        # 암호 일치 확인 방법 bcrypt.checkpw(): 첫번째 파라미터와 두번째 파라미터로 비교하고자 하는 bytes-string 입력
        # check_password_hash(pwhash, password): 사용자가 제출한 비밀번호를 확인할 때
        if result:
            user_name = db_data[0]['USER_NAME']
            return jsonify({'message': f"{user_name}님 반갑습니다.", 'access_token' : create_access_token(identity=db_data[0]['USER_NUM'])})
                                                                    # JWT 토큰을 생성하여 access_token 키 값에 입력
                                                                    # identity 는 db_data의 user_num을 고유 값으로 사용
        else:
            return jsonify({'message': '비밀번호를 다시 입력해주세요.'})
    else:
        return jsonify({'message': '아이디를 다시 입력해주세요.'})
    # jsonify 함수는 키-값 쌍을 가진 딕셔너리를 인자로 받아 JSON 형식으로 반환해주는 함수
if __name__ == "__main__":
    app.run(host='localhost', port='5000', debug=True)
## 이거는 마지막에서만 선언

# 코드를 작성한 파일을 실행하거나 flask run 명령을 사용하여 Flask 애플리케이션을 실행합니다.
# Postman, cURL 또는 웹 브라우저와 같은 도구를 사용하여 회원가입과 로그인 API 엔드포인트를 호출합니다.
# 회원가입에는 POST 요청을 /signup 엔드포인트로 보내고 필요한 데이터를 JSON 형식으로 전송합니다.
# 로그인에는 POST 요청을 /login 엔드포인트로 보내고 필요한 데이터를 JSON 형식으로 전송합니다.
# 각 API 엔드포인트는 요청을 받아 처리하고 응답으로 JSON 데이터를 반환합니다. 응답을 확인하여 예상된 메시지가 올바르게 반환되는지 확인할 수 있습니다.