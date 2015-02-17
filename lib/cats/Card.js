/* ------------------------- */
/* Card Class */
var Side = require('../../lib/cats/Side.js');

function Card() {
}


Card.prototype.setSide = function(side, val, half) {
	var side = new Side(side, val, half)
	this.sides.push(side);
	if (this.sides.length > 4) {
		this.sides.pop();
	}
	return side
}
Card.prototype.rotation = 0;
Card.prototype.sides = [];

Card.prototype.rotate = function() {
	this.sides.forEach(function(el) {
		el.rotate();
	});
	
	this.rotation += 90;
	if (this.rotation > 270) {
		this.rotation = 0;
	}
	return this.rotation;
}





// This line is required to expose the object with the require function
module.exports = Card;
