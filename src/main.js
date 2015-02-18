deck = new Deck();


/* --- Cards --- */
var cards = [
	// 1
	[{ 	type: 'grey',
		direction: 'head' }, 
	{	type: 'siamese',
		direction: 'head' },
	{	type: 'spotted',
		direction: 'tail' },
	{	type: 'orange',
		direction: 'tail' }],
	// 2
	[{ 	type: 'grey',
		direction: 'tail' }, 
	{	type: 'spotted',
		direction: 'tail' },
	{	type: 'orange',
		direction: 'tail' },
	{	type: 'siamese',
		direction: 'tail' }],
	// 3
	[{ 	type: 'siamese',
		direction: 'tail' }, 
	{	type: 'grey',
		direction: 'tail' },
	{	type: 'orange',
		direction: 'head' },
	{	type: 'spotted',
		direction: 'head' }],
	// 4
	[{ 	type: 'spotted',
		direction: 'head' }, 
	{	type: 'spotted',
		direction: 'tail' },
	{	type: 'orange',
		direction: 'head' },
	{	type: 'siamese',
		direction: 'head' }],
	// 5
	[{ 	type: 'orange',
		direction: 'head' }, 
	{	type: 'grey',
		direction: 'head' },
	{	type: 'siamese',
		direction: 'tail' },
	{	type: 'spotted',
		direction: 'head' }],
	// 6
	[{ 	type: 'orange',
		direction: 'tail' }, 
	{	type: 'grey',
		direction: 'head' },
	{	type: 'siamese',
		direction: 'head' },
	{	type: 'spotted',
		direction: 'head' }],
	// 7
	[{ 	type: 'orange',
		direction: 'tail' }, 
	{	type: 'spotted',
		direction: 'head' },
	{	type: 'grey',
		direction: 'head' },
	{	type: 'grey',
		direction: 'tail' }],
	// 8
	[{ 	type: 'siamese',
		direction: 'head' }, 
	{	type: 'grey',
		direction: 'head' },
	{	type: 'orange',
		direction: 'tail' },
	{	type: 'spotted',
		direction: 'tail' }],
	// 9
	[{ 	type: 'siamese',
		direction: 'tail' }, 
	{	type: 'grey',
		direction: 'head' },
	{	type: 'siamese',
		direction: 'head' },
	{	type: 'orange',
		direction: 'tail' }],
]


deck.seedCards(cards);