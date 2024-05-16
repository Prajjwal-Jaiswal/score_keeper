let p1display = document.querySelector("#p1display");
let p2display = document.querySelector("#p2display");

let p1increase = document.querySelector("#p1increase");

let p2increase = document.querySelector("#p2increase");

let p1score = 0;
let p2score = 0;

let playto = document.querySelector("#playto");
let maxscore = playto.value;
let gameOver = true;
//increase p1 points
p1increase.addEventListener("click", function () {
  if (gameOver === false) {
    p1score++;
    p1display.textContent = p1score;
    if (p1score == maxscore) {
      gameOver = true;
      const myTimeout = setTimeout(function () {
        alert("P1 wins");
      }, 500);
    }
  }
});

p2increase.addEventListener("click", function () {
  if (gameOver === false) {
    p2score++;
    p2display.textContent = p2score;
    if (p2score == maxscore) {
      gameOver = true;
      const myTimeout = setTimeout(function () {
        alert("P2 wins");
      }, 500);
    }
  }
});

let reset_btn = document.querySelector("#reset");

reset_btn.addEventListener("click", function () {
  p1score = 0;
  p2score = 0;
  p1display.textContent = p1score;
  p2display.textContent = p2score;
  maxscore = 3;
  playto.value = 3;
  gameOver = false;
});

function myFunction() {
  let x = playto.value;
  maxscore = x;
}
