const planImport = document.getElementById('import');
const img = document.getElementById('img');

// import image to the background
planImport.addEventListener('change', function(){
    const file = this.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const planImage = new Image();
            planImage.src = e.target.result;
            planImage.onload = function(){
                let height = this.height;
                let width = this.width;
                console.log(height, width)
                canvas.style.height = height;
                canvas.style.width = width;
            }
            
           canvas.style.background = `url('${this.result}')`;
        });
        reader.readAsDataURL(file);
    }
})