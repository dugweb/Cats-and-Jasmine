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
		
		expect(card.sides.length).toEqual(2);
	});
	
	it("should rotate sides", function() {
		card.rotate();
		card.rotate();
		expect(card.rotate()).toBeGreaterThan(0);
	});
	
	it("should not hold more than 4 sides", function() {
		card.setSide("top", "bear", "back");
		card.setSide("top", "bear", "back");
		card.setSide("top", "bear", "back");
		card.setSide("top", "bear", "back");
		card.setSide("top", "bear", "back");

		expect(card.sides.length).toEqual(4);
	});
	// it("should set the type", function() {
	// 	expect(card.setType("bear")).toEqual("bear");
	// });
	
});

