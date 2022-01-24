from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import aws_db as api

import time 

app = Flask(__name__)



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

    if result == -1:
        return {'error': "Database is down"}
    return {'error': "none", "result": result}

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
        return {'error': "none", result: "No Payment call"}
    else:
        status = api.installment_status(userid,request.get_json()['installment_number'])
        if status == -1:
            return {'error': "error in getting installment status"}
        else:
            return {'error': "none", result: status}

# for local 
if __name__=='__main__':
    app.run()