let undo = document.getElementById('undo');
let draw = document.getElementById('line');
let select = document.getElementById('select');
let drawable = false

draw.onchange = ()=>{
    if (draw.checked == true) {
        drawable = true;
    }
}
select.onchange = ()=>{
    if (select.checked == true) {
        drawable = false;
    }
}

undo.addEventListener('click', ()=>{
    if (canvas.childElementCount > 2) {   
        canvas.lastChild.remove();
    }
});