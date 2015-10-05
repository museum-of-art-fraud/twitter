var HomePageLayoutView = Marionette.LayoutView.exnted({
	template: '#home-page-template',
	regions: {
		trends: '.trends',
		tweets: '.tweets',
		whoToFollow: '.who-to-follow'
	}
});