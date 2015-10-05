var ProfilePageLayoutView = Marionette.LayoutView.extend({
	template: '#profile-page-template',
	regions: {
		trends: '.trends',
		tweets: '.tweets',
		whoToFollow: '.who-to-follow'
	}
});