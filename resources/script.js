function openRules() {
	document.getElementById("rules").style.height = "100%";
}

function closeRules() {
	document.getElementById("rules").style.height = "0";
}

document.getElementById("btn-rules").addEventListener("click",openRules);
document.getElementById("rules").addEventListener("click",closeRules);

function openPlayAgain() {
	document.getElementById("win").style.height = "100%";
}

function closePlayAgain() {
	document.getElementById("win").style.height = "0%";
}


const images = [
	{
		src: "./resources/images/pizza.png",
		item: "pizza"
	},

	{
		src: "./resources/images/milkshake.png",
		item: "milkshake"
	},

	{
		src: "./resources/images/burger.png",
		item: "burger"
	},

	{
		src: "./resources/images/cake.png",
		item: "cake"
	},

	{
		src: "./resources/images/dessert.png",
		item: "dessert"
	},

	{
		src: "./resources/images/fries.png",
		item: "fries"
	},

	{
		src: "./resources/images/sandwich.png",
		item: "sandwich"
	},

	{
		src: "./resources/images/noodles.png",
		item: "noodles"
	},

	{
		src: "./resources/images/pizza.png",
		item: "pizza"
	},

	{
		src: "./resources/images/milkshake.png",
		item: "milkshake"
	},

	{
		src: "./resources/images/burger.png",
		item: "burger"
	},

	{
		src: "./resources/images/cake.png",
		item: "cake"
	},

	{
		src: "./resources/images/dessert.png",
		item: "dessert"
	},

	{
		src: "./resources/images/fries.png",
		item: "fries"
	},

	{
		src: "./resources/images/sandwich.png",
		item: "sandwich"
	},

	{
		src: "./resources/images/noodles.png",
		item: "noodles"
	}
];

// a function to shuffle food images array
function shuffleImages() {
	for(let index1=0; index1<images.length; index1++) {
		let index2 = Math.floor(Math.random()*images.length);
		let temp = images[index1];
		images[index1] = images[index2];
		images[index2] = temp;
	}
}

shuffleImages();

// a function to create grid of images
function createGrid() {
	for(let i=0; i<images.length; i++) {
		let image = document.createElement("img");
		image.setAttribute("src","./resources/images/tray.png");
		image.setAttribute("data-id",i);
		image.style.backgroundColor = "#ff1938";
		image.addEventListener('click',cardFlipper);
		document.getElementById("grid-container").appendChild(image);
	}
}

createGrid();

let chosenCards = [];
let chosencardIds = [];
let completedCards = [];

// a function to match chosen cards
function matchChosenCards() {
	let cards = document.querySelectorAll("img");

	let firstCardId = chosencardIds[0];
	let secondCardId = chosencardIds[1];

	if(firstCardId === secondCardId) {
		cards[firstCardId].setAttribute("src","./resources/images/tray.png");
		cards[secondCardId].setAttribute("src","./resources/images/tray.png");
	}
	else if(chosenCards[0].item === chosenCards[1].item) {
		cards[firstCardId].setAttribute("src","./resources/images/blank.png");
		cards[secondCardId].setAttribute("src","./resources/images/blank.png");
		cards[firstCardId].style.backgroundColor = "#ffffff";
		cards[secondCardId].style.backgroundColor = "#ffffff";
		cards[firstCardId].removeEventListener("click",cardFlipper);
		cards[secondCardId].removeEventListener("click",cardFlipper);
		completedCards.push(chosenCards[0],chosenCards[1]);
	}
	else {
		cards[firstCardId].setAttribute("src","./resources/images/tray.png");
		cards[secondCardId].setAttribute("src","./resources/images/tray.png");
	}

	chosenCards = [];
	chosencardIds = [];

	console.log(completedCards.length);

	if(completedCards.length === 16)
	{
		console.log(completedCards.length);
		openPlayAgain();
	}
}

// a function to flip the card in the grid
function cardFlipper() {
	if(chosenCards.length < 2)
	{
		let cardId = this.getAttribute("data-id");
		chosenCards.push(images[cardId]);
		chosencardIds.push(cardId);
		this.setAttribute("src",images[cardId].src);
		if(chosenCards.length === 2) {
			setTimeout(matchChosenCards,700);
		}	
	}
}

document.getElementById("playAgainButton").addEventListener('click',playAgain);

function playAgain() {
	
	shuffleImages();

	for(let i=0; i<images.length; i++) {
		let cards = document.querySelectorAll("img");
		cards[i].setAttribute("src","./resources/images/tray.png");
		cards[i].style.backgroundColor = "#ff1938";
		cards[i].addEventListener('click',cardFlipper);
	}
	
	completedCards = [];

	closePlayAgain();
}
