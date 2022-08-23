var btn = document.getElementById("save-offline");
var svg = document.getElementById("canvas");
let triggerDownload = (imgURI, fileName) => {
  let a = document.createElement("a");
  a.setAttribute("download", "image.svg");
  a.setAttribute("href", imgURI);
  a.setAttribute("target", "_blank");
  a.click();
};

let save = () => {
  let data = new XMLSerializer().serializeToString(svg);
  newsvg = data.substring(data.indexOf("<line"));

  let l = document.getElementsByTagName("line");

  var name = document.getElementById("pname").value;
  var height = document.getElementById("pheight").value;
  var width = document.getElementById("pwidth").value;
  var si = `<metadata>
  <rdf:RDF
       xmlns:rdf = "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
       xmlns:rdfs = "http://www.w3.org/2000/01/rdf-schema#"
       xmlns:dc = "http://purl.org/dc/elements/1.1/" >
    <rdf:Description about="${name}"
         dc:height="${height}"
         dc:width="${width}">
    </rdf:Description>
  </rdf:RDF>
  </metadata>
  </svg>`;

  const finalsvg =
    `<svg xmlns="http://www.w3.org/2000/svg" id="canvas"> <svg>` + newsvg + si;
  let svgBlob = new Blob([finalsvg], { type: "image/svg+xml;charset=utf-8" });
  let url = URL.createObjectURL(svgBlob);

  if (l.length == 0) {
    alert("Draw Something before trying to Save");
  } else {
    triggerDownload(url);
  }
};
btn.addEventListener("click", save);
