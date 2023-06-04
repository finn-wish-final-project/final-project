from flask import Flask, render_template, request
from test import Hello
app = Flask(__name__)

@app.route('/')

def hello_flask():
    return Hello

if __name__ == '__main__':
    app.run(host='localhost', port=5000) 