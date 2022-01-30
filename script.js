let clickedOnce = false;
var canvas = document.getElementById("canvas");
var x1;
var y1;
const svgns = "http://www.w3.org/2000/svg";
var materialBtn = document.getElementsByClassName("material");
var lineY = document.getElementById("lineY");
var lineX = document.getElementById("lineX");

const colors = {
  WOOD: "#BA8C63",
  METAL: "#939799",
  CONCRETE: "#808076",
  GLASS: "#a8ccd7",
};
var COLOR = colors["CONCRETE"];


// changing color of line in svg while selecting each material
changeColor = (btn, clr) => {
  COLOR = colors[clr];
  for (const btn in materialBtn) {
    if (Object.hasOwnProperty.call(materialBtn, btn)) {
      const element = materialBtn[btn];
      element.classList.remove("active");
    }
  }
  btn.classList.add("active");
};


// translate client coordinate to canvas coordinate
svgPoint = (element, x, y) => {
  const pt = element.createSVGPoint();
  pt.x = x;
  pt.y = y;
  return pt.matrixTransform(element.getScreenCTM().inverse());
};


canvas.addEventListener("click", (e) => {
  let svgP = svgPoint(canvas, e.clientX, e.clientY);
  if (drawable) {
    if (!clickedOnce) {
      x1 = svgP.x;
      y1 = svgP.y;
      console.log(x1, y1);
      let newLine = document.createElementNS(svgns, "line");
      newLine.setAttribute("x1", `${x1}`);
      newLine.setAttribute("y1", `${y1}`);
      newLine.setAttribute("x2", `${x1}`);
      newLine.setAttribute("y2", `${y1}`);
      newLine.setAttribute(
        "style",
        `stroke:${COLOR};stroke-width:10;stroke-linecap:round`
      );
      newLine.setAttribute(
        "style",
        `stroke:${COLOR};stroke-width:5;stroke-linecap:square`
      );
      
      newLine.setAttribute('onclick', 'changeProp(this)');

      canvas.append(newLine);
      clickedOnce = true;
    } else {
      clickedOnce = false;
    }
  }
});

//endpoit of line
canvas.addEventListener("mousemove", (e) => {
  let svgP = svgPoint(canvas, e.clientX, e.clientY);
  if (clickedOnce) {
    canvas.lastChild.setAttribute("x2", `${svgP.x}`); //e.layerx
    canvas.lastChild.setAttribute("y2", `${svgP.y}`); //e.layery
  }
  // lineX.style.top = `${e.pageY}px`; //e,pagey
  // lineY.style.left = `${e.pageX}px`; //e.pagex
});

// showing svg lines in console 
// this is on test state
changeProp = (e)=>{
  if (!drawable) {
    console.log('clicked', e);   
    alert(e);
  }
}

// set initial scroll to middle
// not an optimal solution
var h = document.getElementById('canvas-box').scrollWidth;
var w = document.getElementById('canvas-box').scrollHeight;
document.getElementById('canvas-box').scrollTop = (h/2)-(h/3);
document.getElementById('canvas-box').scrollLeft =  (w/2)-(w/4);