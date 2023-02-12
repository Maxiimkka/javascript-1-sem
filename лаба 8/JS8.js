

function mouse_over(ontext) {
  ontext.style.color = "red";
}

function mouse_out(outtext) {
  outtext.style.color = "black";
}

var Color = true;

function mouse_click_size(colortext) {

  if (Color) {
    colortext.style.fontSize = "22px";
    Color = false;
  }
  else {
    colortext.style.fontSize = "16px";
    Color = true;
  }
}

var Img = true;

function mouse_click_img() {
  let img = document.getElementById("Img");

  if (Img) {
    img.src = "морген.jpg";
    Img = false;
  }
  else {
    img.src = "california-hipster-indie-wallpapers-Favim.com-3868616.jpg";
    Img = true;
  }
}

var text = true;

function mouse_click_text() {
  let text_img = document.getElementById("Text");
  if (text) {
    text_img.innerHTML = "<img src='c1ebd2c8027797323b94ce9446bb0cbe.jpg' height='135px' width='333px'>"
    text = false;
  }
  else {
    text_img.innerHTML = " Amet mollit quis excepteur. <br/>  Incididunt cillum enim.<br/> Anim cupidatat minim.<br/>Aliquip minim consequat.";
    text = true;
  }
}

function mouse_over_img(OverImg) {
  OverImg.style.width = "666px";
}

function mouse_out_img(OutImg) {
  OutImg.style.width = "333px";
}

function db_click_border(DBBorder) {
  DBBorder.style.border = "5px double black";
}

function click_border(border) {
  border.style.border = "1px solid white";
}