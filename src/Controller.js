var Controller = Marionette.Object.extend({
	initialize: function () {
		this.tweetCollection = new TweetCollection();
		this.rootLayoutView = new RootLayoutView({tweetCollection: this.tweetCollection});
	},
	showHome: function () {
		var homePageLayoutView = new HomePageLayoutView({tweetCollection: this.tweetCollection});
		this.rootLayoutView.getRegion('main').show(homePageLayoutView);
	},
	showProfile: function () {
		var profilePageLayoutView = new ProfilePageLayoutView();
		this.rootLayoutView.getRegion('main').show(profilePageLayoutView);
	},
	defaultRoute: function () {
		Backbone.history.navigate('home', {trigger: true});
	}
});