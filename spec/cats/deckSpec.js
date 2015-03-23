describe("Deck", function() {

	var seed = [
				[{ 	type: 'grey',
					half: 'head' }, 
				{	type: 'siamese',
					half: 'head' },
				{	type: 'spotted',
					half: 'tail' },
				{	type: 'orange',
					half: 'tail' }],
				// 2
				[{ 	type: 'grey',
					half: 'tail' }, 
				{	type: 'spotted',
					half: 'tail' },
				{	type: 'orange',
					half: 'tail' },
				{	type: 'siamese',
					half: 'tail' }],
				// 3
				[{ 	type: 'siamese',
					half: 'tail' }, 
				{	type: 'grey',
					half: 'tail' },
				{	type: 'orange',
					half: 'head' },
				{	type: 'spotted',
					half: 'head' }]
			];
	var deck;

	beforeEach(function() {
		deck = new Deck();

		deck.seedCards(seed);
	});
	afterEach(function() {
		deck = null;
	});

	it("should have 3 cards", function() {
		expect(deck.cards.length).toEqual(3);
	});

	it("The first card should be the same as the seeded card", function() {
		expect(deck.cards.length).toEqual(3);
		expect(deck.cards[0].sides[0].type).toEqual(seed[0][0].type);
		expect(deck.cards[0].sides[0].half).toEqual(seed[0][0].half);
	});

	it("should check if two cards have a matching side", function() {
		expect(deck.doCardsMatch(deck.cards[0], deck.cards[1], 1, 3)).toBeTruthy();
		expect(deck.doCardsMatch(deck.cards[0], deck.cards[1], 0, 2)).toBeFalsy();
	});

});