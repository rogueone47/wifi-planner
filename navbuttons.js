const planImport = document.getElementById('import');
const img = document.getElementById('img');

// import image to the background
planImport.addEventListener('change', function(){
    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(){
           canvas.style.background = `url('${this.result}')`
        });
        reader.readAsDataURL(file);
    }
})