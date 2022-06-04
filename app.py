from crypt import methods
from xml.etree.ElementTree import Comment
from flask import *
from flask_wtf import FlaskForm, CSRFProtect
from wtforms.validators import DataRequired, Length, Regexp
from wtforms.fields import *
from flask_bootstrap import Bootstrap5, SwitchField
from flask_sqlalchemy import SQLAlchemy
import pymysql
import datetime
import os
import requests
import random
import hashlib
import requests
import json
import pickle
from util import ac_auto
from web3 import Web3
UPLOAD_FOLDER = 'static/img'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}
app = Flask(__name__)
app.secret_key = 'dev'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
# set default button sytle and size, will be overwritten by macro parameters
app.config['BOOTSTRAP_BTN_STYLE'] = 'primary'
app.config['BOOTSTRAP_BTN_SIZE'] = 'sm'
# app.config['BOOTSTRAP_BOOTSWATCH_THEME'] = 'lumen'  # uncomment this line to test bootswatch theme

# set default icon title of table actions
app.config['BOOTSTRAP_TABLE_VIEW_TITLE'] = 'Read'
app.config['BOOTSTRAP_TABLE_EDIT_TITLE'] = 'Update'
app.config['BOOTSTRAP_TABLE_DELETE_TITLE'] = 'Remove'
app.config['BOOTSTRAP_TABLE_NEW_TITLE'] = 'Create'
eth_addr = 'http://172.20.231.224:8545'

Bootstrap5(app)
db = pymysql.connect(host='localhost',
                     user='root',
                     passwd='123456',
                     database = 'eth_net')
cursor = db.cursor()
w3 = Web3(Web3.HTTPProvider('http://172.20.231.224:8545'))
def getinsts(tradehash):
    session = requests.Session()
    method = 'debug_traceTransaction'
    params = [tradehash,{}]
    payload= {"jsonrpc":"2.0",
            "method":method,
            "params":params,
            "id":1}
    headers = {'Content-type': 'application/json'}
    response = session.post(eth_addr, json=payload, headers=headers)
    print(response.text)
    print("a"*114514)
    insts = response.json()["result"]["structLogs"]
    return insts

def getexeclist(insts):
    label = set()
    for inst in insts:
        pc = inst['pc']
        op = inst['op']
        stack = inst['stack']
        if(op == "JUMP" or op == "JUMPI"):
            label.add(pc+1)
            label.add(int(stack[-1],16))
    execlist = []
    for inst in insts:
        pc = inst['pc']
        if(pc in label):
            execlist.append(pc)
    return execlist

def getinfo(tradehash):
    res = w3.eth.getTransaction(tradehash)
    return res["from"],res["to"],res["input"]

@app.route('/index.html', methods=['GET', 'POST'])
def index():
    return render_template("index.html")

@app.route('/train.html', methods=['GET', 'POST'])
def train():
    tradehash = request.args.get("tradehash")
    if tradehash is not None :
        insts = getinsts(tradehash)

        execlist = getexeclist(insts)
        
        _from,to,param = getinfo(tradehash)
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        cursor.execute("INSERT INTO train_log (user_addr, contract_addr,param,time,tradehash) VALUES (%s,%s,%s,%s,%s)",(_from,to,param,time,tradehash))
        db.commit()
        try:
            f = open("model/"+to,"rb")
            ac = pickle.load(f)
            f.close()
        except:
            ac = ac_auto()
        ac.add(execlist)
        f = open("model/"+to,"wb")
        pickle.dump(ac,f)
        return "ok"
    else:
        try:
            cursor.execute("SELECT * FROM train_log ")
            train_logs = cursor.fetchall()
        except:
            db.rollback()
        return render_template("train.html",train_logs=train_logs)

@app.route('/detech.html', methods=['GET', 'POST'])
def detech():
    tradehash = request.args.get("tradehash")
    if tradehash is not None :
        insts = getinsts(tradehash)
        execlist = getexeclist(insts)
        _from,to,param = getinfo(tradehash)
        time = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        try:
            f = open("model/"+to,"rb")
            ac = pickle.load(f)
            f.close()
        except:
            ac = ac_auto()
        if not ac.search(execlist):
            cursor.execute("INSERT INTO detech_log (user_addr, contract_addr,param,time,tradehash) VALUES (%s,%s,%s,%s,%s)",(_from,to,param,time,tradehash))
            db.commit()
        return "warning"
    else:
        try:
            cursor.execute("SELECT * FROM detech_log ")
            detech_logs = cursor.fetchall()
        except:
            db.rollback()
        return render_template("detech.html",detech_logs=detech_logs)
@app.route('/deal.html', methods=['GET', 'POST'])
def deal():
    tradehash = request.args.get("tradehash")
    action = request.args.get("action")
    if action == "ok":
        cursor.execute("DELETE detech_log WHERE tradehash=%s",(tradehash))
        db.commit()
        return redirect("/train?tradehash="+tradehash)
    else :
        return "not implement"
app.run(debug=True)