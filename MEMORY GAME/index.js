const cardArray = [
  {
    name: "fries",
    img: "images/frenchfries.jpg",
  },
  {
    name: "cheeseburger",
    img: "images/burger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/icecream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
  {
    name: "fries",
    img: "images/frenchfries.jpg",
  },
  {
    name: "cheeseburger",
    img: "images/burger.jpg",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/icecream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.jpg",
  },
  {
    name: "pizza",
    img: "images/pizza.jpg",
  },
];
cardArray.sort(() => 0.5 - Math.random()); //array is sorted randomly everytime refreshed
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChosen = [];
let cardschosenids = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/white.png");
    card.setAttribute("data-id", i); //every images is given id  data-id

    gridDisplay.append(card); //adding images to grid
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}
createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("img");
  const optionOneId = cardschosenids[0];
  const optionTwoId = cardschosenids[1];
  console.log("check for match");
  if (optionOneId == optionTwoId) {
    alert("you have clickded same image");
  }
  if (cardChosen[0] == cardChosen[1]) {
    alert("you found a match");
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);

    cardsWon.push(cardChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    alert("try again");
  }
  resultDisplay.innerHTML = cardsWon.length;
  cardChosen = [];
  cardschosenids = [];
  if (cardsWon.length == cardArray.length / 2) {
    resultDisplay.innerHTML = "congulations u found them all";
  }
}
console.log(cardArray);
function flipCard() {
  const cardid = this.getAttribute("data-id"); //this element gets whatever we clicked
  // console.log(cardArray[cardid].name);  //get the name
  cardChosen.push(cardArray[cardid].name);
  cardschosenids.push(cardid);
  console.log(cardid);
  console.log(cardChosen);
  this.setAttribute("src", cardArray[cardid].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
