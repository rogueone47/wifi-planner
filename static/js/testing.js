var c = document.getElementById("output-canvas");
data = JSON.parse(data);

window.onload = () => {
  var heatmap = h337.create({
    container: c,
    maxOpacity: 0.6,
    radius: 50,
    blur: 0.9,
    backgroundColor: "rgba(0, 0, 58, 0.96)",
  });
  $(".heatmap-canvas").width(data.size[0]);
  $(".heatmap-canvas").height(data.size[1]);
  $(".heatmap-canvas").css("width", data.size[0]);
  $(".heatmap-canvas").css("height", data.size[1]);
  var ca = $("#output-canvas").find("canvas")[0];
  var ctx = ca.getContext("2d");
  ctx.canvas.height = data.size[1];
  ctx.canvas.width = data.size[0];
  ctx.lineWidth = 3;

  
  for (let i=0; i < data.svg.length; i++) {
    const e = data.svg[i];
    ctx.beginPath();
    ctx.moveTo(e.x1, e.y1, e.x2, e.y2);
    ctx.lineTo(e.x2, e.y2);
    ctx.strokeStyle = e.stroke;
    ctx.stroke();
    ctx.closePath();}
  document.getElementsByClassName("heatmap-canvas")[0].addEventListener("click", function (e) {
    heatmap.addData({ x: e.layerX, y: e.layerY, value: 100, radius: 100 });
  for (let i=0; i < data.svg.length; i++) {
      const e = data.svg[i];
      ctx.beginPath();
      ctx.moveTo(e.x1, e.y1, e.x2, e.y2);
      ctx.lineTo(e.x2, e.y2);
      ctx.strokeStyle = e.stroke;
      ctx.stroke();
      ctx.closePath();
    }
  })

};



$("#save").click(()=>{
  link = document.getElementsByClassName("heatmap-canvas")[0].toDataURL(`image/jpg`);
  let tempLink = document.createElement('a');
  tempLink.download = "wifi-planner.jpg";
  tempLink.href = link;
  tempLink.click();
})
