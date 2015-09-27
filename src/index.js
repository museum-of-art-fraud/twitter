var userSuggestionCollection = new UserCollection([
	{name: 'hello'},
	{name: 'world'}
]);

var userSuggestionCollectionView = new UsersSuggestionCollectionView({
	collection: userSuggestionCollection,
	el: '.medias'
});

userSuggestionCollectionView.render();

var trendCollection = new TrendCollection([
	{name: '#Marr'},
	{name: 'Jean de Villiers'},
	{name: '#танцынатнт'},
	{name: 'Cereal Cafe'},
	{name: '#GratefulYammouni'},
	{name: 'Sanusi'},
	{name: '#НасосБезСмс'},
	{name: 'Ron Dennis'},
	{name: '#ThankYouALDUBNation'},
	{name: 'Frank Tyson'}
]);

var trendCollectionView = new TrendCollectionView({
	collection: trendCollection,
	el: '.trends-list'
});

trendCollectionView.render();

var userProfileModel = new UserModel({
	firstName: 'Sargon',
	lastName: 'Piraev',
	userName: '@sargonpiraev',
	tweetTotal: '4',
	followingTotal: '324',
	followerTotal: '32'
});

userProfileItemView = new UserProfileItemView({
	model: userProfileModel,
	el: '.profile'
});

userProfileItemView.render();

var tweetCollection = new TweetCollection([
	{author: 'Jack Bill', text: 'Here the text of the news 1 goes'},
	{author: 'Marry Key', text: 'Here the text 2 goes'},
	{author: 'Clue Bill', text: 'The text 3 of the news 1 goes'},
	{author: 'Lilly Key', text: 'Here the text 4 goes'}
]);

var tweetCollecionView = new TweetCollectionView({
	collection: tweetCollection,
	el: '.tweets-block'
});

tweetCollecionView.render();
