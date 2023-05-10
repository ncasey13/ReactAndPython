from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
from bson.objectid import ObjectId
from flask_cors import CORS
import time
import subprocess

app = Flask(__name__)

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="2255",
  database="test"
)

class Lock():
   picture_lock = False

lock = Lock()

mycursor = mydb.cursor(prepared=True)

CORS(app)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/create', methods=['POST', 'GET']) # type: ignore
def create():
  if request.method == 'POST' and request.json:
    print('create - post request')
    body = request.json
    first_name = body['first_name']
    last_name = body['last_name']
    email = body['email']
    phone = body['phone']
    qry = "INSERT INTO users(first_name, last_name, email, phone) VALUES (%s, %s, %s, %s)"
    vals = (first_name, last_name, email, phone)
    mycursor.execute(qry, vals)
    mydb.commit()
    return jsonify({'status': 'success'})
  if request.method == 'GET':
    print('create - get request')
    mycursor.execute("SELECT * FROM users")
    data = mycursor.fetchall()
    print(data)
    return jsonify(data)

@app.route('/remove', methods=['POST']) # type: ignore
def remove():
  if request.json:
    body = request.json
    print('delete ' + str(body['id']))
    qry = "DELETE FROM users WHERE id = %s"
    mycursor.execute(qry, [body['id']])
    mydb.commit()
  return jsonify({'status': 'success'})


@app.route('/pictures', methods=['POST']) # type: ignore
def pictures():
  if not lock.picture_lock:
    print('pictures')
    lock.picture_lock = True
    j = 0
    while j < 10:
      for i in range(1, 9):
        file = 'pictures/Picture{}.png'.format(i)
        subprocess.run(['mv', file, 'pictures/currpic.png'])
        subprocess.run(['cp', 'pictures/currpic.png', '../frontend/src/pictures/'])
        subprocess.run(['mv', 'pictures/currpic.png' , file])
        time.sleep(0.5)
      j += 1
    lock.picture_lock = False
  else:
    print('pictures running')
  return jsonify({'status': 'success'})

if __name__ == '__main__':
  app.debug = True
  app.run()