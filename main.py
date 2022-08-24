from flask import Flask, render_template, request, redirect
from flask_cors import CORS 
import json
from tkinter import *
import math

app = Flask(__name__)
CORS(app)


@app.route('/', methods=['GET', 'POST'])
def landing():
    return render_template('landing.html')


@app.route('/home', methods=['GET', 'POST'])
def home():
    img = ''
    if request.method == 'POST':
        img = request.form.get('planImage')
        return render_template('index.html', data= img)
    else:
        return render_template('index.html')


@app.route('/playground', methods=['GET', 'POST'])
def testing():
    if request.method == 'POST':
        svg = request.form.get('svg')
        svg = json.loads(svg)
        scale_y = request.form.get('scale_height')
        scale_x = request.form.get('scale_width')
        # horizontal = list(filter(lambda x: x['y1'] == x['y2'], svg))
        # vertical = list(filter(lambda x: x['x1'] == x['x2'], svg))
        svg = list(filter(lambda x: (abs(x['y1'] - x['y2']) != 0 or abs(x['x1'] - x['x2']) != 0), svg))

        horizontal = list(filter(lambda x: abs(x['y1'] - x['y2']) <= 10, svg))
        vertical = list(filter(lambda x: abs(x['x1'] - x['x2']) <= 10 , svg))

        h_len = list(map(lambda x: abs(x['x1'] - x['x2']), horizontal))
        v_len = list(map(lambda x: abs(x['y1'] - x['y2']), vertical))

        print(horizontal )
        print("\n\n")
        print(vertical)
        print("\n\n")
        print(svg)
        print("\n\n")
        print(h_len, v_len)
        
        size = (request.form.get('c_width'), request.form.get('c_height'))
        data = {
            'project_name':request.form.get('project_name'),
            'svg':svg,
            'size':size
        }
        return render_template('testing.html', data=data)
    else:
        return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True, port=1800)
