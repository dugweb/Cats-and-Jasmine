function Deck() {
	this.cards = [];

	this.el = document.createElement('ul');
	this.el.className = 'card-container';

	this.output = document.getElementById('output');
	this.output !== null ? output.appendChild(this.el): console.log("judist");
	this.draggingIndex = 0;

	this.self = this;
}

Deck.prototype.sides = ['top', 'right', 'bottom', 'left']

Deck.prototype.addCard = function(arr) {
	var c = new Card();

	for (var i = 0; i < arr.length; i++) {
		c.setSide(this.sides[i], arr[i].type, arr[i].half);	
	}

	this.cards.push(c);
}

Deck.prototype.seedCards = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.addCard(arr[i]);
	}

	this.render();
	this.listenersInit();
	return this.cards;
}

Deck.prototype.getCards = function() {
	return this.cards;
}
Deck.prototype.rotate = function(cardIndex) {
	this.cards[cardIndex].rotate();
	this.checkAllMatches();
};

Deck.prototype.doCardsMatch = function(card1, card2, side1, side2) {

	side1 = sideIndex(side1);
	side2 = sideIndex(side2);

	var type = card1.sides[side1].getType() == card2.sides[side2].getType();
	var half = card1.sides[side1].getHalf() != card2.sides[side2].getHalf();

	return type && half;
}

Deck.prototype.render = function() {
	el = this.el;
	el.innerHTML = "";

	for (var i = 0; i < this.cards.length; i++) {
		el.appendChild(this.cards[i].el);
	}

	this.el = el;
};

Deck.prototype.checkAllMatches = function() {
	cards = this.getCards();

	for (var i = 0; i < cards.length - 1; i++) {

		if ((i + 1) % 3 !== 0) {
			if (this.doCardsMatch(cards[i], cards[i+1], "right", "left")) {
				cards[i].setMatching("right");
				cards[i + 1].setMatching("left");
			}
		}

		if (i < 5) {
			if (this.doCardsMatch(cards[i], cards[i+3], "bottom", "top")) {
				cards[i].setMatching("bottom");
				cards[i + 3].setMatching("top");
			}	
		}
			
	}

	this.render();
};

/* Drag and drop cards */

Deck.prototype.swapCardPosition = function(index1, index2) {
	var cards = this.cards;
	var temp = cards[index1];
	cards[index1] = cards[index2];
	cards[index2] = temp;

	this.checkAllMatches();
};


Deck.prototype.listenersInit = function(	) {
	for (var i = 0; i < this.cards.length; i++) {
		var el = this.cards[i].el;

		el.setAttribute('draggable', 'true');
		el.addEventListener("dragstart", this.dragStartHandler.bind(this));
		el.addEventListener("drag", this.dragHandler.bind(this));
		el.addEventListener("drop", this.dropHandler.bind(this));
		el.addEventListener("dragover", this.dragoverHandler.bind(this));
		el.addEventListener("click", this.clickHandler.bind(this));
	}

};

Deck.prototype.dragStartHandler = function(e) {
	
	this.draggingIndex = $(e.target).index();
};


Deck.prototype.dragHandler = function(e) {
	// console.log("dragging");
}

Deck.prototype.dropHandler = function(e) {
	e.preventDefault();

	console.log(this.draggingIndex);
	this.swapCardPosition($(e.target).index(), this.draggingIndex);
}

Deck.prototype.dragoverHandler = function(e) {
	e.preventDefault();
	// console.log(e.target);
}

Deck.prototype.clickHandler = function(e) {
	this.rotate($(e.target).index());
	console.log('clicked ' + $(e.target).index());
	console.log(e);
};