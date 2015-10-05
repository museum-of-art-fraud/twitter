var userSuggestionCollection = new UserCollection();
userSuggestionCollection.fetch();

var userSuggestionCollectionView = new UsersSuggestionCollectionView({
	collection: userSuggestionCollection,
	el: '.medias'
});

userSuggestionCollectionView.render();

var trendCollection = new TrendCollection();
trendCollection.fetch();

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

var tweetCollection = new TweetCollection();
tweetCollection.fetch();
var tweetCollecionView = new TweetCollectionView({
	collection: tweetCollection,
	el: '.tweets-block'
});
tweetCollecionView.render();

var whoToFollowCollection = new UserCollection();
whoToFollowCollection.fetch();
whoToFollowCompositeView = new WhoToFollowCompositeView({
	el: '.who-to-follow',
	collection: whoToFollowCollection
});
whoToFollowCompositeView.render();
