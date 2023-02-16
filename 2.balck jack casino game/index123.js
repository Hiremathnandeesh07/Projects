function getrandomcard() {
  return Math.floor(Math.random() * 10) + 2;
}
var firstcard = getrandomcard();
var secondcard = getrandomcard();
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
let cardtext = document.getElementById("card_text");
let sumtext = document.getElementById("sum_text");

let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEL = document.getElementById("message-el");
function startgame() {
  rendergame();
}

function rendergame() {
  if (sum <= 20) {
    cardtext.innerHTML = "cards:" + " " + firstcard + " " + secondcard;
    sumtext.innerHTML = "sum:" + " " + sum;
    message = "do u want to draw a card!";
  } else if (sum === 21) {
    cardtext.innerHTML = "cards:" + " " + firstcard + " " + secondcard;
    sumtext.innerHTML = "sum:" + " " + sum;
    message = "wooooh! u have won a blackjack";
    hasBlackJack = true;
  } else {
    sumtext.innerHTML = "sum:" + " " + sum;
    message = "u r out of game";
    isAlive = false;
  }
  messageEL.textContent = message;
}
function newCard() {
  let card = getrandomcard();
  cards.push(card);
  // cardtext.innerHTML = "Cards: " + cards;
  cardtext.innerHTML += cards[2];
  // "cards:" + " " + firstcard + " " + secondcard + " " + card;
  sum += card;
  rendergame();
}
