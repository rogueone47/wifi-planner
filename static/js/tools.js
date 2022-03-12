let undo = document.getElementById('undo');
let draw = document.getElementById('line');
let select = document.getElementById('select');
let drawable = false

//choose draw or selection

draw.onchange = ()=>{
    if (draw.checked == true) {
        drawable = true;
        // lineX.style.display = "block";
        // lineY.style.display = "block";
        canvas.style.cursor = "default";

    }
}


select.onchange = ()=>{
    if (select.checked == true) {
        drawable = false;
        // lineX.style.display = "none";
        // lineY.style.display = "none";
        canvas.style.cursor = "pointer";
    }
}

// undo function
// pop elements from svg array
undo.addEventListener('click', ()=>{
    if (canvas.childElementCount > 2) {   
        canvas.lastChild.remove();
    }
});

//Transparency Slider

const range = document.getElementById("myRange")
const canva = document.getElementById("canva")

range.addEventListener("input", (e) => {
    canva.style.fillOpacity = e.target.value;
})