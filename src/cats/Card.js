/* ------------------------- */
/* Card Class */


function Card() {

	// Instance Variables
	this.description;
	this.sides = [];
	this.rotation = 0;

	this.el;
}


Card.prototype.setSide = function(direction, val, half) {
	
	direction = this.validateDirection(direction);

	if (direction && this.sides.length < 4) {
		var side = new Side(direction, val, half);
		this.sides.push(side);
		this.setDescription();	
	}

	this.render();
	return side	
	
}

Card.prototype.setDescription = function() {
	this.description = "";
	for (var i = 0; i < this.sides.length; i++) {
		this.description += this.sides[i].description + "\n";
	};
}

Card.prototype.rotate = function() {
	for (var i = 0; i < this.sides.length; i++) {
		this.sides[i].rotate();
	};
	
	// take last element and push it to the front
	this.sides.unshift(this.sides.pop());

	this.rotation += 90;
	if (this.rotation >= 360) {
		this.rotation = 0;
	}

	this.render();
	return this.rotation;
}

Card.prototype.validateDirection = function(direction) {
	return validateDirection(direction);
}

Card.prototype.setMatching = function(side) {
	this.sides[sideIndex(side)].setMatching(true);
};

Card.prototype.render = function() {

	var el = document.createElement('div');
	el.className = "card";

	// nest the "Sides" elements inside of it.
	for (var i = 0; i < this.sides.length; i++) {
		el.appendChild(this.sides[i].getEl());
	}

	this.el = el;
};