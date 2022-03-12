const range = document.getElementById("myRange")
const canva = document.getElementById("canva")

range.addEventListener("input", (e) => {
    canva.style.fillOpacity = e.target.value;
})


