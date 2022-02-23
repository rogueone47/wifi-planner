const scaleUp = document.getElementById('plus');
const scaleDown = document.getElementById('minus');
const scaleText = document.getElementById('scale');
let scaleVal = parseInt(scaleText.value);

scaleUp.addEventListener('click', ()=>{
    if(scaleVal != 10){
    scaleVal +=1;
    }
    scaleText.value = scaleVal;
})
scaleDown.addEventListener('click', ()=>{
    if(scaleVal != 0){
        scaleVal -=1;
        }
    scaleText.value = scaleVal;
})

