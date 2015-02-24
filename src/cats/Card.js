/* ------------------------- */
/* Card Class */


function Card() {

	// Instance Variables
	this.description;
	this.sides = Object.create(null);
	this.rotation = 0;
}


Card.prototype.setSide = function(direction, val, half) {
	
	direction = this.validateDirection(direction);

	if (direction) {
		var side = new Side(direction, val, half);
		this.sides[direction] = side;
		this.setDescription();
		return side		
	}

}

Card.prototype.setDescription = function() {
	this.description = "";
	for (var direction in this.sides) {
		this.description += this.sides[direction].description + "\n";
	};
}

Card.prototype.rotate = function() {
	for(var direction in this.sides) {
		this.sides[direction].rotate();
	};
	
	this.rotation += 90;
	if (this.rotation >= 360) {
		this.rotation = 0;
	}

	return this.rotation;
}

Card.prototype.validateDirection = function(direction) {
	return validateDirection(direction);
}