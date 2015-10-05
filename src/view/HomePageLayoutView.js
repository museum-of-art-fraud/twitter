var HomePageLayoutView = Marionette.LayoutView.extend({
	template: '#home-page-template',
	regions: {
		trends: '.trends',
		tweets: '.tweets',
		whoToFollow: '.who-to-follow'
	}
});