const closeBtn = document.getElementById('close');
const popUp = document.getElementById('popup');
const openBtn = document.getElementById('open');

closeBtn.addEventListener('click', ()=>{
    popUp.style.display = 'none';
});
openBtn.addEventListener('click', ()=>{
    popUp.style.display = 'block';
})
