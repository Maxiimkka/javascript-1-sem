

//1 
var ball = document.getElementById('butterfly');

butterfly.onmousedown = function (location) {

  moveAt(location);

  document.body.appendChild(butterfly); /* Это означает, что узел не может находиться в двух точках документа одновременно. Поэтому, если у узла уже есть родитель, он сначала удаляется, а затем добавляется в новую позицию.*/

  butterfly.style.zIndex = 1000; // показывать мяч над другими элементами

  function moveAt(location) {
    butterfly.style.left = location.pageX - butterfly.offsetWidth / 2 + 'px';
    butterfly.style.top = location.pageY - butterfly.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function (location) {
    moveAt(location);
  }

  butterfly.onmouseup = function () {
    document.onmousemove = null;
    butterfly.onmouseup = null;
  }
}

butterfly.ondragstart = function () {   //Атрибут событий ondragstart позволяет задать срабатывание скрипта, когда пользователь начинает перетаскивать элемент.
  return false;
}
//2 
var img_line = document.getElementById('img');

function move_img() {
  let counter = 0;
  return () => {
    counter += 10;
    img_line.style.marginLeft = counter + "px";
    if (counter == 1100) clearInterval(time)
  }
}

let move = move_img();
let time = setInterval("move()", 50);


//3 
let idImg = document.getElementById("myImg");
setInterval("moveR()", 40);

function moveR() {
  if (parseInt(idImg.style.left) < 900 && parseInt(idImg.style.left) < 600) {
    idImg.style.left = parseInt(idImg.style.left) + Math.floor(0.4 * 22) + "px";
    idImg.style.top = parseInt(idImg.style.top) + Math.floor(0.4 * 8) + "px";

  } else {
    idImg.style.left = 30 + "px";
    idImg.style.top = 250 + "px";
  }
}

//4 
function save() {
  var canvas = document.getElementById('c1');
  var ctx = canvas.getContext('2d');
  var func = Number(document.forms.fenster.s.value);
  var col = document.forms.fenster.color.value;
  switch (func) {

    case 1: {
      var x = 0;
      var move = setInterval(
        function draw2() {
          let y_2 = 200 - 0.08 * Math.pow(x - 200, 2);
          x = x + 0.3;
          ctx.fillStyle = col;
          ctx.fillRect(x, y_2, 2, 2);
        }, 5);
      ; break;
    }

    case 2: {
      var x = 0;
      var move = setInterval(
        function draw3() {
          let y_3 = 200 - 0.002 * Math.pow(x - 200, 3);
          x += 0.3;
          ctx.fillStyle = col;
          ctx.fillRect(x, y_3, 2, 2);
        }, 1);
      ; break;
    }

    case 3: {
      var x = 0;
      var move = setInterval(
        function drawSin() {
          let y_sin = 200 + 10 * Math.sin(0.2 * (x - 200));
          x += 0.8;
          ctx.fillStyle = col;
          ctx.fillRect(x, y_sin, 2, 2);
        }, 5);
      break;
    }

    case 4: {
      var x = 0;
      var move = setInterval(
        function drawCos() {
          let y_cos = 200 + 10 * Math.cos(0.2 * (x - 1200));
          x += 0.8;
          ctx.fillStyle = col;
          ctx.fillRect(x, y_cos, 2, 2);
        }, 5);
      ; break;
    }
  }
}

//5 
select.onclick = function () {
  let color = document.forms.fenster.color.value;
  if (color == 'blue') {
    document['select'].style.backgroundColor = 'rgb(30, 9, 98)'
    document['select'].style.borderColor = 'rgb(30, 9, 98)'
    document['select'].style.color = 'rgb(30, 9, 98)'
  }
  if (color == 'red') {
    document['select'].style.backgroundColor = 'rgb(255, 0, 0)'
    document['select'].style.borderColor = 'rgb(255, 0, 0)'
    document['select'].style.color = 'rgb(255, 0, 0)'
  }
  if (color == 'green') {
    document['select'].style.backgroundColor = 'rgb(0, 255, 64)'
    document['select'].style.borderColor = 'rgb(0, 255, 64)'
    document['select'].style.color = 'rgb(0, 255, 64)'
  }
  if (color == 'yellow') {
    document['select'].style.backgroundColor = 'rgb(238, 255, 0)'
    document['select'].style.borderColor = 'rgb(238, 255, 0)'
    document['select'].style.color = 'rgb(238, 255, 0)'
  }
}
