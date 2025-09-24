//dodaj eventListener input na picker
//stavi da je currentColor trenutna vrednost e.target.value
//na eraser, stavi da je current color bela
//a na board stavi da je cell background color = current color
//pokusaj sad da dodas input type range
//na njega stavi EventListener pokupi vrednost iz etarget value i pokusaj da na osnovu toga napravis grid
//--------------
//napravi varijablu let mode
//na pocetku neka bude normal
//na klik dugmeta random mode, promeni da to bude string random
//na klik svakog drugog dugmeta vrati ga na normal
//unutar eventlistenera za kvadrate proveri je li mod random, ako jeste, izgenerisi random boju
//i promeni current color u tu boju, u suprotnom uradi sto i sada radis
const board = document.querySelector(".board");
const colorPicker = document.getElementById("background");
const btnColor = document.querySelector(".color-mode");
const btnEraser = document.querySelector(".eraser");
const btnClear = document.querySelector(".clear");
const sizeInput = document.getElementById("size");
const btnRandom = document.querySelector(".random"); // dugme za random mod

// umesto "red", sinhronizuj sa picker-om
let currentColor = colorPicker.value;
let SIZE = 16;

// NOVO: mode varijabla
let mode = "normal";

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

// helper za random boju
function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

colorPicker.addEventListener("input", (e) => {
  currentColor = e.target.value;
  mode = "normal"; // svako drugo dugme vraća na normal
});

btnColor.addEventListener("click", () => {
  currentColor = colorPicker.value;
  mode = "normal";
});

btnEraser.addEventListener("click", () => {
  currentColor = "white";
  mode = "normal";
});

btnRandom?.addEventListener("click", () => {
  mode = "random"; // aktiviraj random
});

board.addEventListener("mouseover", (e) => {
  const cell = e.target.closest(".cell");
  if (!cell) return;

  // ako je random, generiši boju za svaki potez
  let drawColor = currentColor;
  if (mode === "random") {
    drawColor = getRandomColor();
    currentColor = drawColor; // ažuriraj currentColor na tu nasumičnu
  }

  cell.style.backgroundColor = drawColor;
});

btnClear.addEventListener("click", () => {
  mode = "normal";
  grid(SIZE);
});

sizeInput.addEventListener("input", (e) => {
  SIZE = parseInt(e.target.value, 10);
  mode = "normal";
  grid(SIZE);
});

grid(SIZE);
