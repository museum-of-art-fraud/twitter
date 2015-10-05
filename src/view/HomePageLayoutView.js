var HomePageLayoutView = Marionette.LayoutView.extend({
	template: '#home-page-template',
	regions: {
		trends: '.trends',
		tweets: '.tweets',
		whoToFollow: '.who-to-follow',
		profile: '.profile'
	},
	onBeforeShow: function(){
		var whoToFollowUserCollection = new UserCollection();
		var trendCollection = new TrendCollection();
		var tweetCollection = new TweetCollection();
		var profileModel = new UserModel({
			firstName: 'Sargon',
			lastName: 'Piraev',
			userName: '@sargonpiraev',
			tweetTotal: '4',
			followingTotal: '324',
			followerTotal: '32'
		});

		var whoToFollowCompositeView = new WhoToFollowCompositeView({
			collection: whoToFollowUserCollection
		});
		var trendCompositeView = new TrendCompositeView({
			collection: trendCollection
		});
		var tweetCollectionView = new TweetCollectionView({
			collection: tweetCollection
		});
		var userProfileItemView = new UserProfileItemView({
			model: profileModel
		});
		
		this.showChildView('whoToFollow',  whoToFollowCompositeView);
		this.showChildView('trends', trendCompositeView);
		this.showChildView('tweets', tweetCollectionView);
		this.showChildView('profile', userProfileItemView);

		whoToFollowUserCollection.fetch();
		trendCollection.fetch();
		tweetCollection.fetch();
		// profileModel.fetch();

	}
});