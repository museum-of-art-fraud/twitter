var ProfilePageLayoutView = Marionette.LayoutView.extend({
	template: '#profile-page-template',
	regions: {
		trends: '.trends',
		tweets: '.tweets',
		whoToFollow: '.who-to-follow'
	},
	onBeforeShow: function(){
		var whoToFollowUserCollection = new UserCollection();
		var trendCollection = new TrendCollection();
		var tweetCollection = new TweetCollection();


		var whoToFollowCompositeView = new WhoToFollowCompositeView({
			collection: whoToFollowUserCollection
		});
		var trendCompositeView = new TrendCompositeView({
			collection: trendCollection
		});
		var tweetCollectionView = new TweetCollectionView({
			collection: tweetCollection
		});
		
		this.showChildView('whoToFollow',  whoToFollowCompositeView);
		this.showChildView('trends', trendCompositeView);
		this.showChildView('tweets', tweetCollectionView);

		whoToFollowUserCollection.fetch();
		trendCollection.fetch();
		tweetCollection.fetch();
		// profileModel.fetch();

	}
});