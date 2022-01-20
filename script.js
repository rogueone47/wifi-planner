let clickedOnce = false;
var canvas = document.getElementById('canvas');
var x1;
var y1;
const svgns = "http://www.w3.org/2000/svg";
var materialBtn = document.getElementsByClassName('material');

const colors = {
    'WOOD':'#BA8C63',
    'METAL':'#939799',
    'CONCRETE':'#808076',
    'GLASS':'#a8ccd7'
}
var COLOR = colors['CONCRETE'];

changeColor = (btn, clr)=>{
    COLOR = colors[clr];
    for (const btn in materialBtn) {
        if (Object.hasOwnProperty.call(materialBtn, btn)) {
            const element = materialBtn[btn];
            element.classList.remove('active');
        }
    }
    btn.classList.add('active');
}

canvas.addEventListener('click', (e)=>{
    console.log(e)
    if(!clickedOnce){
    x1 = e.layerX;
    y1 =e.layerY;
    clickedOnce = true;
    }
    else{
        clickedOnce = false;
        let newLine = document.createElementNS(svgns, "line");
        newLine.setAttribute('x1', `${x1}`);
        newLine.setAttribute('y1', `${y1}`);
        newLine.setAttribute('x2', `${e.layerX}`);
        newLine.setAttribute('y2', `${e.layerY}`);
        newLine.setAttribute("style", `stroke:${COLOR};stroke-width:5`);
        canvas.append(newLine);

    }
    console.log(canvas)
})
