function Deck() {
	this.cards = []
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
	// this.cards = [];
	for (var i = 0; i < arr.length; i++) {
		this.addCard(arr[i]);
	}
	return this.cards;
}

Deck.prototype.doCardsMatch = function(index1, index2) {

	var card1 = this.cards[index1];
	var card2 = this.cards[index2];

	//console.log(this.cards);
	card1.sides.forEach(function(side) {

		// console.log(side);

	});
}