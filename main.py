from flask import Flask, render_template, request, redirect
from flask_cors import CORS 
import json
from tkinter import *
import math

app = Flask(__name__)
CORS(app)

x_scale = 0
y_scale = 0
svg = []

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
    global x_scale, y_scale, svg
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
        mh= 0
        vh = 0
        try:
            mh = max(h_len)
            vh = max(v_len)
        except:
            pass

        x_scale = mh / int(scale_x)
        y_scale = vh / int(scale_y)
        print(f"x axis 1 unit is {mh / int(scale_x)}m and y axis 1 unit is {vh / int(scale_y)}m")
        print("\n\n")
        print(svg)
        
        size = (request.form.get('c_width'), request.form.get('c_height'))
        data = {
            'project_name':request.form.get('project_name'),
            'svg':svg,
            'size':size
        }
        return render_template('testing.html', data=data)
    else:
        return render_template('index.html')


@app.route('/test', methods=['GET'])
def test():
    argts = request.args
    x = int(argts.get("x"))
    y = int(argts.get("y"))
    from shapely.geometry import LineString
    from shapely.geometry import Point
    import shapely

    col = []

    p = Point(round(x, 2),round(y, 2))
    c = p.buffer(100).boundary
    for i in svg:
        l = LineString([(round(float(i['x1']), 2),round(float(i['y1']), 2)), (round(float(i['x2']), 2), round(float(i['y2']), 2))])
        inter = c.intersection(l)
        if isinstance(inter, shapely.geometry.multipoint.MultiPoint):
            col.append(inter.geoms[1].coords[0])

    print(col)
    return {
        "x":x,
        "y":y
    }


if __name__ == '__main__':
    app.run(debug=True, port=1800)
