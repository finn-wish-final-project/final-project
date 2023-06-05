import pymysql

# 올바른 이메일 형식인지 확인
def email_validation(email):
    email = email
    if '@' in email and  5 < len(email) < 30:
        return True
    else:
        return False
    
# 중복 이메일 주소 가입 방지    
def email_overlap(email):
    connection = pymysql.connect(host='localhost', port=3306, db='finnwish', user='root', passwd='1807992102', charset='utf8')
    cursor = connection.cursor(pymysql.cursors.DictCursor)

    sql = "SELECT * FROM USER_LOGIN WHERE EMAIL = %s"
    cursor.execute(sql, (email,))
    result = cursor.fetchone()

    connection.close()

    if result:
        return False 
    # jsonify({'message': '이미 사용 중인 이메일 주소입니다.'})
    else:
        return True
    
# 최소 비밀번호 길이 확인
def pw_validation(password):
    if len(password) >= 4:
        return True
    else: 
        return False 
    # jsonify({'message': '비밀번호를 4자 이상 입력해 주세요.'})

# 유저 이름 입력 정보 확인
def name_validation(name):
    if len(name) >= 1:
        return True 
    else:
        return False 
    # jsonify({'message':'이름을 1자리 이상 입력해 주세요.'})

# 생일 6자리로 입력 확인
def birth_validation(birth):
    if len(birth) == 6:
        return True 
    else:
        return False 
    # jsonify({'message':'생일을 6자리 숫자로 입력해 주세요.'})

# 전화번호 양식 확인
def phone_validation(phone):
    if 3 <= len(phone) <= 11:
        return True 
    else:
        return False 
    # jsonify({'message':'( - ) 기호 없이 전화번호만 입력해 주세요'})