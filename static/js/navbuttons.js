const exportBtn = document.getElementById('export');
const svgInfo = document.getElementById('canvas');
const svgInput = document.getElementById('svg-data');

exportBtn.addEventListener('click', ()=>{
    var svgText = svgInfo.childNodes;
    let myData = [];
    for (let i = 7; i < svgText.length; i++) {
        const element = svgText[i];
        myData = [...myData, element.attributes];
    }
    svgInput.value = myData;
    document.getElementById('svg-form').submit();
})