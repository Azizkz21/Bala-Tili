const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const img = new Image();
const colors = document.getElementsByClassName("jsColor");

// состояние рисуем : true ? false;
let painting = false;

canvas.height = 485;
canvas.width = 928;

// толщина кисти
ctx.lineWidth = 2.5;
// цвет кисти
ctx.strokeStyle = "rgba(52, 63, 82, 1)";

// функция остановки рисования
function stopPainting() {
  painting = false;
}

// функция старта рисования
function starPainting() {
  painting = true;
}

// функция отслеживания x и y по блоку canvas и рисования по кисти
function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    // создание контура
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    // рисуем линию
    ctx.lineTo(x, y);

    ctx.stroke();
  }
}

// функция клика отслежования после старт рисования
function onMouseDown(event) {
  painting = true;
}

// функция выбора цвета
function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

// условия если действия происходят в canvase срабатывают coolback вычсл
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);
