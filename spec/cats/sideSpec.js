describe("Side", function() {
	var Side = require('../../lib/cats/Side');
	var side;

	beforeEach(function() {
		side = new Side();
	});

	it("let you set the type (string)", function() {
		side.setType("judist");
		expect(side.type).toEqual("judist");
	});
});