def email_validation(email):
  email=email
  if len(email)>5 and len(email)<40:
    return True
  else:
    return False

def password_validation(password):
  password=password
  if len(password)>7:
    return True
  else:
    return False

def name_validation(name):
  name=name
  if len(name)>1:
    return True
  else:
    return False