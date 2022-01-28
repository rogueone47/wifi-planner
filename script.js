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
        `stroke:${COLOR};stroke-width:10;stroke-linecap:round`
      );
      canvas.append(newLine);
      clickedOnce = true;
    } else {
      clickedOnce = false;
    }
  }
});


canvas.addEventListener("mousemove", (e) => {
  let svgP = svgPoint(canvas, e.clientX, e.clientY);
  if (clickedOnce) {
    canvas.lastChild.setAttribute("x2", `${svgP.x}`); //e.layerx
    canvas.lastChild.setAttribute("y2", `${svgP.y}`); //e.layery
  }
  lineX.style.top = `${e.pageY}px`; //e,pagey
  lineY.style.left = `${e.pageX}px`; //e.pagex
});
