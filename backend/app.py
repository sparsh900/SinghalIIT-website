from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import aws_db as api

import time 

app = Flask(__name__)



@app.route('/API/user_exist', methods=['GET', 'POST'])
def user_exist():
    result = api.user_exist(request.get_json()['email'])
    if result == -2:
        return {'error': "Database is down"}
    return {'error': "none", result: result}

@app.route('/API/RegisterUser', methods=['GET', 'POST'])
def RegisterUser():
    result = api.registar_user(request.get_json()['Section'],
                                request.get_json()['Name'],
                                request.get_json()['Email'],
                                request.get_json()['MobileNumber'])
    if result == -1:
        return {'error': "Database is down"}
    return {'error': "none", result: "done"}


# for local 
if __name__=='__main__':
    app.run()