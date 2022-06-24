var slider_img = document.querySelector(".slider_2_img");
var images = ["Slider_1.jpg", "Slider_2.jpg"];
var i = 0;

function prev() {
  if (i <= 0) i = images.length;
  i--;
  return setImg();
}

function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImg();
}

function setImg() {
  return slider_img.setAttribute("src", "img/" + images[i]);
}
