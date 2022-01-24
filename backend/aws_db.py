import pymysql
import aws_credentials as rds
# import DB_cryptography as crypt


import string
import random
import datetime


def user_exist(email):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select * from UserMaster where Email = %s"
            cur.execute(sql,(email))
            data = cur.fetchall()
            if(len(data)==0):
                return {"error": 0, "result": False}
            return {"error": "none", "result": True}

    except Exception as e:
        print("email exist Exception error in email",email,"error: ",e)
        return {"error": 1}


def generate_promoCode(name):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )

    promoStarting = ""

    for i in range(len(name)):
        if(name[i]!=" "):
            promoStarting += name[i]
        if(len(promoStarting)==2):
            break


    PromoCode = promoStarting + str(random.randint(0,10000))


    try:
        with conn.cursor() as cur:
            sql = "select * from UserMaster where PromoCode = %s"
            cur.execute(sql,(PromoCode))
            data = cur.fetchall()
            if(len(data)==0):
                return PromoCode
            return generate_promoCode(name)

    except Exception as e:
        print("registar_user Exception error: ",e)
        return False


def fetch_BatchStartYear():
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select CurrentYearValue from CurrentYear where ID = %s"
            cur.execute(sql,1)
            data = cur.fetchone()
            return data[0]

    except Exception as e:
        print("registar_user Exception error: ",e)
        return False


def registar_user(Section, name, email, mobile):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "insert into UserMaster(Section, Name, Email, MobileNumber, BatchStartYear, PromoCode, isActive) value(%s,%s,%s,%s,%s,%s,%s)"
            year = fetch_BatchStartYear()
            if(year==False):
                return -1
            promo = generate_promoCode(name)
            if(promo==False):
                return -1
            cur.execute(sql,(Section,name, email, mobile, year, promo,1))
            conn.commit()
            return 1

    except Exception as e:
        print("registar_user Exception error: ",e)
        return -1





def get_fees_structure(year):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select * from ConfigurableValues where BatchStartYear = %s"
            cur.execute(sql,(year))
            data = cur.fetchone()

            keys = ["BatchStartYear", "1stInstallmentAmount", "2ndInstallmentAmount", "3rdInstallmentAmount", "1stInstallmentDueDate", "2ndInstallmentDueDate", "3rdInstallmentDueDate", "1stInstallmentDueDate","2ndInstallmentDueDate", "3rdInstallmentDueDate","PromotionBonusAmount","PromotionDiscountAmount"]
            
            dic={}
            for i in range(len(data)):
                dic[keys[i]]=data[i]



            return dic


    except Exception as e:
        print("error in getting fees structure error: ",str(e))
        return -1



def get_student_batch_year(email):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select BatchStartYear from UserMaster where email = %s"
            cur.execute(sql,(email))
            data = cur.fetchone()

            return data[0]

    except Exception as e:
        print("error in getting fees structure error: ",str(e))
        return -1



def record_entry(userid,code):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "insert into PromoApply(UserID, PromoCode) value(%s,%s)"
            cur.execute(sql,(userid, code))
            conn.commit()
            
            return 


    except Exception as e:
        print("error in recording promo code usage error: ",str(e))
        return 0


def promo_code(code):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select exists(select * from UserMaster where PromoCode= %s)"
            cur.execute(sql,code)
            
            

            return cur.fetchone()[0]


    except Exception as e:
        print("error in promo code error: ",str(e))
        return -1

def get_user_id(email):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select UserID from UserMaster where Email= %s"
            cur.execute(sql,email)
            
            

            return cur.fetchone()[0]


    except Exception as e:
        print("error in promo code error: ",str(e))
        return -1

def installment_exist(userid,installment_number):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select exists(select * from UserPayments where UserID= %s and InstallmentNumber = %s)"
            cur.execute(sql,(userid,installment_number))
            
            

            return cur.fetchone()[0]


    except Exception as e:
        print("error in promo code error: ",str(e))
        return -1


def installment_status(userid,installment_number):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select StatusForPayer from UserPayments where UserID= %s and InstallmentNumber = %s"
            cur.execute(sql,(userid,installment_number))
            
            

            return cur.fetchone()[0]


    except Exception as e:
        print("error in promo code error: ",str(e))
        return -1


def user_data(email):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select UserName, MobileNumber, DateOfBirth from UserMaster where Email = %s"
            cur.execute(sql,email)
            return cur.fetchone()


    except Exception as e:
        print("error in getting fees structure error: ",str(e))
        return 0


def details_save(details):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:


            sql = "update UserMaster set MobileNumber = %s, DateOfBirth = %s, UserName = %s where Email = %s"
            cur.execute(sql,(details['mobile'], details['birth'], details['name'], details['email']))
            conn.commit()            

            return 1


    except Exception as e:
        print("error in save details error: ",str(e))
        return 0


def password_correction(details):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:


            sql = "select PasswordHash from UserMaster where Email = %s"
            cur.execute(sql,(details['email']))
            password = cur.fetchone()           


            if(crypt.decrypt(bytes(str(password[0]), encoding='utf-8')) == details['password']):
                return 1
            return 0


    except Exception as e:
        print("error in password correction error: ",str(e))
        return 0


def change_password(details):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            password = crypt.encrypt(details['password'])
            sql = "update UserMaster set PasswordHash = %s where Email = %s"
            cur.execute(sql,(password, details['email']))
            conn.commit()           

            return 1


    except Exception as e:
        print("error in changing password error: ",str(e))
        return 0

def get_history(user_id):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select InstallmentNumber, TotalAmount, CreatedDate, StatusForPayer from UserPayments where UserID = %s"
            cur.execute(sql,user_id)
            
            

            return cur.fetchall()


    except Exception as e:
        print("error in get_history(user_id) error: ",str(e))
        return 0


    

def code_usage(promocode):
    conn = pymysql.connect(
        host = rds.host,
        port = rds.port,
        user = rds.user,
        password = rds.password,
        db = rds.databasename,
    )
    try:
        with conn.cursor() as cur:
            sql = "select UserName, BatchStartYear, BonusAmount, StatusForPromoter, BonusPaymentDate, BonusPaymentMode  from  PromoUsage inner join UserPayments on PromoUsage.PaymentId = UserPayments.PaymentId inner join UserMaster on UserPayments.UserID = UserMaster.UserID where PromoCodeUsed = %s"
            cur.execute(sql,promocode)
            
            

            return cur.fetchall()


    except Exception as e:
        print("error in code_usage(promocode) error: ",str(e))
        return 0