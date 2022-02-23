const imagebox = document.getElementById("image-box");
const crop_btn = document.getElementById("crop-btn");
const input = document.getElementById("import");
const cont = document.getElementById("cont");
const scale = document.getElementById("scale-section");
const sample = document.getElementById("sample");

input.addEventListener("change", () => {
  imagebox.style.display = "block";
  crop_btn.style.display = "block";
  const img_data = input.files[0];

  const url = URL.createObjectURL(img_data);

  imagebox.innerHTML = `<img src="${url}" id="image">`;

  const image = document.getElementById("image");

  document.getElementById("image-box").style.display = "block";
  document.getElementById("crop-btn").style.display = "block";
  cont.classList.replace("container-item-box-b4", "container-item-box")

  const cropper = new Cropper(image, {
    autoCropArea: 1,
    viewMode: 1,
    scalable: false,
    zoomable: false,
    movable: false,
    minCropBoxWidth: 200,
    minCropBoxHeight: 200,
  });

  crop_btn.addEventListener("click", () => {
    cropper.getCroppedCanvas().toBlob((blob) => {
      let fileInputElement = document.getElementById("import");

      let file = new File([blob], img_data.name, {
        type: "image/*",
        lastModified: new Date().getTime(),
      });
      let container = new DataTransfer();
      container.items.add(file);
      fileInputElement.files = container.files;

      const reader = new FileReader();
      reader.addEventListener("load", function (e) {
		  scale.style.display = "grid";
		  cont.style.display = "none";
        sample.innerHTML = `<img src="${this.result}">`;
      });
      reader.readAsDataURL(fileInputElement.files[0]);
    });
  });
});
