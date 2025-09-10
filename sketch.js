const board = document.querySelector(".board");
const colorPicker = document.getElementById("background");
const btnColor = document.querySelector(".color-mode");
const btnEraser = document.querySelector(".eraser");
const btnClear = document.querySelector(".clear");

let currentColor = "";
let mode = "color";
const SIZE = 16;
//dodaj eventListener input na picker
//stavi da je currentColor trenutna vrednost e.target.value
//na eraser, stavi da je current color bela
//a na board stavim da je cell background color = current color
//pokusaj sad da dodas input type range
//na njega stavi EventListener pokupi vrednost iz etarget value i pokusaj da na osnovu toga napravis grid

function grid(n = SIZE) {
  board.innerHTML = "";
  for (let i = 0; i < n * n; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    board.appendChild(cell);
  }
}

board.addEventListener("mouseover", (e) => {
  const cell = e.target.closest(".cell");
  if (!cell) return;
  cell.style.backgroundColor = mode === "color" ? colorPicker.value : "white";
});

btnColor.addEventListener("click", () => (mode = "color"));
btnEraser.addEventListener("click", () => (mode = "eraser"));
btnClear.addEventListener("click", () => grid(SIZE));

grid(SIZE);
