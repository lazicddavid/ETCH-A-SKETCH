//dodaj eventListener input na picker
//stavi da je currentColor trenutna vrednost e.target.value
//na eraser, stavi da je current color bela
//a na board stavi da je cell background color = current color
//pokusaj sad da dodas input type range
//na njega stavi EventListener pokupi vrednost iz etarget value i pokusaj da na osnovu toga napravis grid

const board = document.querySelector(".board");
const colorPicker = document.getElementById("background");
const btnColor = document.querySelector(".color-mode");
const btnEraser = document.querySelector(".eraser");
const btnClear = document.querySelector(".clear");
const sizeInput = document.getElementById("size");

let currentColor = "#red";
let SIZE = 16;

function grid(n = SIZE) {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${n}, 1fr)`;
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    board.appendChild(cell);
  }
}

colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
});

btnColor.addEventListener("click", () => {
  currentColor = colorPicker.value;
});

btnEraser.addEventListener("click", () => {
  currentColor = "white";
});

board.addEventListener("mouseover", (e) => {
  const cell = e.target.closest(".cell");
  if (!cell) return;
  cell.style.backgroundColor = currentColor;
});

btnClear.addEventListener("click", () => grid(SIZE));

sizeInput.addEventListener("input", (e) => {
  SIZE = e.target.value;
  grid(SIZE);
});

grid(SIZE);
