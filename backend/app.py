from flask import Flask, render_template, request, redirect, url_for, session, jsonify
import aws_db as api

import time 

app = Flask(__name__)

@app.route('/API/time')
def get_time():
    return {'time': time.time()}


@app.route('/API/user_exist', methods=['GET', 'POST'])
def user_exist():
    data = request.get_json()
    print(data)

    return {'result': 1}

# @app.route('/API/RegisterUser')
# def RegisterUser():

# for local 
if __name__=='__main__':
    app.run()