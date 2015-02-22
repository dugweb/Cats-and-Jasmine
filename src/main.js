deck = new Deck();


/* --- Cards --- */
var cards = [
	// 1
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
		half: 'head' }],
	// 4
	[{ 	type: 'spotted',
		half: 'head' }, 
	{	type: 'spotted',
		half: 'tail' },
	{	type: 'orange',
		half: 'head' },
	{	type: 'siamese',
		half: 'head' }],
	// 5
	[{ 	type: 'orange',
		half: 'head' }, 
	{	type: 'grey',
		half: 'head' },
	{	type: 'siamese',
		half: 'tail' },
	{	type: 'spotted',
		half: 'head' }],
	// 6
	[{ 	type: 'orange',
		half: 'tail' }, 
	{	type: 'grey',
		half: 'head' },
	{	type: 'siamese',
		half: 'head' },
	{	type: 'spotted',
		half: 'head' }],
	// 7
	[{ 	type: 'orange',
		half: 'tail' }, 
	{	type: 'spotted',
		half: 'head' },
	{	type: 'grey',
		half: 'head' },
	{	type: 'grey',
		half: 'tail' }],
	// 8
	[{ 	type: 'siamese',
		half: 'head' }, 
	{	type: 'grey',
		half: 'head' },
	{	type: 'orange',
		half: 'tail' },
	{	type: 'spotted',
		half: 'tail' }],
	// 9
	[{ 	type: 'siamese',
		half: 'tail' }, 
	{	type: 'grey',
		half: 'head' },
	{	type: 'siamese',
		half: 'head' },
	{	type: 'orange',
		half: 'tail' }],
]


deck.seedCards(cards);