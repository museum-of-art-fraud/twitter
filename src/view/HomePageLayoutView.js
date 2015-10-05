var HomePageLayoutView = Marionette.LAyoutView.extend({
	template: '#home-page',
	regions: {
		trends: '.trends',
		tweets: '.tweets',
		whoToFollow: '.who-to-follow'
	}
});