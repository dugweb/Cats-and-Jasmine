function Deck() {
	this.cards = [];

	this.el = document.createElement('div');
	this.el.className = 'card-container';

	var output = document.getElementById('output');
	output !== null ? output.appendChild(this.el): console.log("judist");
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

	return this.cards;
}

Deck.prototype.getCards = function() {
	return this.cards;
}

Deck.prototype.doCardsMatch = function(card1, card2, side1, side2) {

	type = card1.sides[side1].getType() == card2.sides[side2].getType();
	half = card1.sides[side1].getHalf() != card2.sides[side2].getHalf();

	return type && half;
}

Deck.prototype.render = function() {
	el = this.el;

	for (var i = 0; i < this.cards.length; i++) {
		el.appendChild(this.cards[i].el);
	}

	this.el = el;
};

Deck.prototype.checkAllMatches = function() {
	cards = this.getCards();

	for (var i = 0; i < cards.length; i++) {



	}
};