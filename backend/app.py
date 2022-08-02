from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import aws_db as api
import os
import time 
from werkzeug.utils import secure_filename

app = Flask(__name__)
UPLOAD_FOLDER = '/media'


@app.route('/API/user_exist', methods=['GET', 'POST'])
def user_exist():
    result = api.user_exist(request.get_json()['email'])
    if result["error"] == 1:
        return {'error': "Database is down"}
    return {'error': "none", "result": result["result"]}

@app.route('/API/RegisterUser', methods=['GET', 'POST'])
def RegisterUser():
    result = api.registar_user(request.get_json()['Section'],
                                request.get_json()['Name'],
                                request.get_json()['Email'],
                                request.get_json()['MobileNumber'])
    if result == -1:
        return {'error': "Database is down"}
    return {'error': "none", "result": "done"}


@app.route('/API/Fee_table_content', methods=['GET', 'POST'])
def Fee_table_content():
    student_year = api.get_student_batch_year(request.get_json()['Email'])
    if(student_year==-1):
        return {'error': "invalid Batch start year"}
    
    result = api.get_fees_structure(student_year)
    print(result,student_year)

    if result["error"] == 1:
        return {'error': "Database is down"}
    return {'error': "none", "result": result["result"]}

@app.route('/API/promo_code_exist', methods=['GET', 'POST'])
def promo_code_exist():
    result = api.promo_code(request.get_json()['promo_code'])
    if result == -1:
        return {'error': "Database is down"}
    return {'error': "none", "result": result}

@app.route('/API/installment_status', methods=['GET', 'POST'])
def installment_status():
    userid = api.get_user_id(request.get_json()['Email'])
    if(userid ==-1):
        return {'error': "invalid email or db down"}
    
    result = api.installment_exist(userid,request.get_json()['installment_number'])
    if result == -1:
        return {'error': "Database is down"}
    if result == 0:
        return {'error': "none", 'result': "No Payment call"}
    else:
        status = api.installment_status(userid,request.get_json()['installment_number'])
        if status["error"] == 1:
            return {'error': "error in getting installment status"}
        else:
            return {'error': "none", 'result': status["result"]}






def upload_media(Mfile):
    target = os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    filename = secure_filename(Mfile.filename)
    destination="/".join([target, filename])
    if os.path.isfile(destination):
        return "already_exists"
    file.save(destination)
    return filename

def delete_media(filename):
    target = os.path.join(UPLOAD_FOLDER)
    if not os.path.isdir(target):
        os.mkdir(target)
    destination="/".join([target, filename])
    if os.path.isfile(destination):
        os.remove(destination)
    return


@app.route('/API/submit_studymaterial', methods=['GET', 'POST'])
def submit_studymaterial():
    print('1111111111111')
    subject = request.form['Subject']
    # # print(subject)
    topic = request.form['Topic']
    Mfile = request.files['file']
    # print('1111111111111')
    print(topic)
    # Mfile_name = upload_media(Mfile)

    # if(Mfile_name=="already_exists"):
    #     return {'error': "file name already exist choose other name"}

    # result = api.submit_studymaterial()
    # if result == 0:
    #     delete_media(Mfile_name)
    #     return {'error': "db is too busy or down"}
    # else:
    #     return {'error': 'none'}

# for local 
if __name__=='__main__':
    app.run()