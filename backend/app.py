from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

mydb = mysql.connector.connect(
  host="localhost",
  user="root",
  password="2255",
  database="test"
)

mycursor = mydb.cursor()

CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/create', methods=['POST', 'GET']) # type: ignore
def create():
  if request.method == 'POST' and request.json:
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
      mycursor.execute("SELECT * FROM users")
      data = mycursor.fetchall()
      print(data)
      return jsonify(data)
        

if __name__ == '__main__':
    app.debug = True
    app.run()