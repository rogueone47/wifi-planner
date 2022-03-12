from django.shortcuts import redirect
from flask import Flask, render_template, request, redirect
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET', 'POST'])
def landing():
    return render_template('landing.html')


@app.route('/home', methods=['GET', 'POST'])
def home():
    img = ''
    if request.method == 'POST':
        img = request.form.get('image')
        return render_template('index.html', data= img)


if __name__ == '__main__':
    app.run(debug=True)