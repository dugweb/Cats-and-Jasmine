/* -------------------------- */
/* Side Class */
function Side(direction, type, half) {
	
	/* Instance Variables */
	this.type;
	this.half;
	this.direction;
	this.description;

	this.setType(type);
	if (this.half == undefined) {
		this.setHalf(half);
	}
	this.setDirection(direction);
}

Side.prototype.setType = function(type) {
	this.type = type;
	return this.type;
}

Side.prototype.setHalf = function(half) {
	this.half = half;
	return this.half;
}

Side.prototype.setDirection = function(direction) {
	
	
	
	this.direction = validateDirection(direction);
	this.setDescription();

	return this.direction;
}

Side.prototype.setDescription = function() {
	this.description = this.direction + ": " + this.type + " " + this.half;
	return this.description;
}

Side.prototype.rotate = function() {
	switch(this.direction) {
			case "top":
				this.setDirection("right"); break;
			case "right":
				this.setDirection("bottom"); break;
			case "bottom":
				this.setDirection("left"); break;
			case "left":
				this.setDirection("top"); break;
			default:
				this.setDirection(null); break;
	}
}


/* Helper Functions */
function validateDirection(direction) {
	if (direction == undefined || isNumeric(direction)) {
		return false;
	}

	switch (direction.charAt(0).toLowerCase()) {
		case "t":
			direction = "top"; break;
		case "r":
			direction = "right"; break;
		case "b":
			direction = "bottom"; break;
		case "l":
			direction = "left"; break;
		default:
			direction = 'top'; break;
	}

	return direction;
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}