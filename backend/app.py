from flask import Flask, render_template, request, redirect, url_for, jsonify
import mysql.connector
from bson.objectid import ObjectId
from flask_cors import CORS

app = Flask(__name__)

mydb = mysql.connector.connect(
  host="localhost",
  user="yourusername",
  password="yourpassword"
)

if __name__ == '__main__':
    app.debug = True
    app.run()