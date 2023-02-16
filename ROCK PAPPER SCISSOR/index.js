const computerChoiceDisplay = document.getElementById("computer-choice");
const UserChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compuerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    UserChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    resultshow();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    compuerChoice = "rock";
  }
  if (randomNumber == 3) {
    compuerChoice = "paper";
  }
  if (randomNumber == 2) {
    compuerChoice = "scissor";
  }
  computerChoiceDisplay.innerHTML = compuerChoice;
}

function resultshow() {
  if (compuerChoice === userChoice) {
    result = "its a draw";
  }
  if (compuerChoice === "rock" && userChoice === "paper") {
    result = "YOU win!";
  }
  if (compuerChoice === "paper" && userChoice === "rock") {
    result = "COMPUTER win!";
  }
  if (compuerChoice === "paper" && userChoice === "scissor") {
    result = "YOU win!";
  }
  if (compuerChoice === "rock" && userChoice === "scissor") {
    result = "YOU win!";
  }
  if (compuerChoice === "scissor" && userChoice === "rock") {
    result = "COMPUTER win!";
  }
  if (compuerChoice === "scissor" && userChoice === "paper") {
    result = "COMPUTER win!";
  }
  resultDisplay.innerHTML = result;
}
