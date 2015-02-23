/* ------------------------- */
/* Card Class */


function Card() {
	this.description;
	this.sides = [];
	this.rotation = 0;
}


Card.prototype.setSide = function(side, val, half) {
	var side = new Side(side, val, half)
	this.sides.push(side);
	if (this.sides.length > 4) {
		this.sides.shift();
	}
	this.setDescription();
	return side
}

Card.prototype.setDescription = function() {
	this.description = "";
	for (var i = 0; i < this.sides.length; i++) {
		this.description += this.sides[i].direction + ": " + this.sides[i].type + " " + this.sides[i].half + "| \n";
	};
}

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
