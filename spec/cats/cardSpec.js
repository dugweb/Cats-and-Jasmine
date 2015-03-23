describe("Card", function() {
	
	var card;
	
	beforeEach(function() {
		card = new Card();
	});
	afterEach(function() {
		card = null;
	});
	
	it("should set sides", function() {
		card.setSide("top", "bear", "back");
		card.setSide("right", "pig", "front");
		
		expect(card.sides[0]).toBeDefined();
		expect(card.sides[1]).toBeDefined();
	});
	
	it("should rotate sides", function() {
		card.setSide("top", "bear", "back");
		card.setSide("right", "pig", "front");
		card.setSide("bottom", "bear", "back");
		card.setSide("left", "pig", "front");

		card.rotate();
		card.rotate();
		expect(card.rotate()).toBeGreaterThan(0);
	});
	
	it("should only take top, right, bottom, and left directions", function() {
		card.setSide("top", "bear", "back");
		card.setSide("right", "bear", "back");
		card.setSide("bottom", "bear", "back");
		card.setSide("left", "bear", "back");
		card.setSide("David", "bear", "back");
		card.setSide(123, "bear", "back");
		card.setSide("judist", "bear", "back");

		console.log(card);
		var count = card.sides.length;
		
		expect(count).toEqual(4);
	});
	
});

