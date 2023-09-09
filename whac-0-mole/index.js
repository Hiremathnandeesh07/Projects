// const squares = document.querySelectorAll(".square");
// const mole = document.querySelector(".mole");
// const timeLeft = document.querySelector("#time-left");
// const score = document.querySelector("#score");

// let result = 0;
// let hitPosition;
// let currentTime = 60;
// let timerId = null;

// function randomSquare() {
//   squares.forEach((square) => {
//     square.classList.remove("mole");
//   });

//   let randomSquare = squares[Math.floor(Math.random() * 9)];
//   console.log(randomSquare);
//   console.log(Math.floor(Math.random() * 9));
//   randomSquare.classList.add("mole"); //adds in random position

//   hitPosition = randomSquare.id;
// }

// squares.forEach((square) => {
//   square.addEventListner("mousedown", () => {
//     if (square.id == hitPosition) {
//       result++;
//       score.textContent = result;
//       hitPosition = null;
//     }
//   });
// });
// function movemole() {
//   timerId = setInterval(randomSquare, 100);
// }
// // randomSquare();
// movemole();

// function countDown() {
//   currentTime--;
//   timeLeft.textContent = currentTime;
//   if (currentTime == 0) {
//     clearInterval(countDownTimerId);
//     clearInterval(timerId);
//     alert("game over ! your final score is " + result);
//   }
// }
// let countDownTimerId = setInterval(countDown, 1000);

const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timerId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("GAME OVER! Your final score is " + result);
  }
}

let countDownTimerId = setInterval(countDown, 100);
