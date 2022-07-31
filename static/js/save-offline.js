var btn = document.getElementById('save-offline')
var svg = document.getElementById('canvas')
let triggerDownload = (imgURI,fileName) =>{
  let a = document.createElement('a')
  a.setAttribute('download','image.svg')
  a.setAttribute('href',imgURI)
  a.setAttribute('target','_blank')
  a.click()
}
let save = () =>{
  let data = (new XMLSerializer()).serializeToString(svg)
  let svgBlob = new Blob([data],{type:'image/svg+xml;charset=utf-8'})
  let url = URL.createObjectURL(svgBlob)
  triggerDownload(url)
}
btn.addEventListener('click',save)