function Deck() {
}

Deck.prototype.sides = ['top', 'right', 'bottom', 'left']
Deck.prototype.cards = [];
Deck.prototype.addCard = function(arr) {
	var c = new Card();

	for (var i = 0; i < arr.length; i++) {
		c.setSide(this.sides[i], arr[i].type, arr[i].direction);	
	}

	this.cards.push(c);
}

Deck.prototype.seedCards = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		this.addCard(arr[i]);
	}
	return this;
}