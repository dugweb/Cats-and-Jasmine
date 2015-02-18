/* -------------------------- */
/* Side Class */
function Side(direction, type, half) {
	this.setDirection(direction);
	this.setType(type);
	if (this.half == undefined) {
		this.setHalf(half);
	}
}

Side.prototype.type;
Side.prototype.setType = function(type) {
	this.type = type;
	return this.type;
}

Side.prototype.half;
Side.prototype.setHalf = function(half) {
	this.half = half;
	return this.half;
}

Side.prototype.direction;
Side.prototype.setDirection = function(direction) {
	
	if (direction == undefined) {
		return this.direction;
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
			direction = null; break;
	}
	
	this.direction = direction;
	return this.direction;
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


// This line is required to expose the object with the require function
// module.exports = Side;