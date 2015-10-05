var Controller = Marionette.Object.extend({
	initialize: function () {
		this.rootLayoutView = new RootLayoutView();
	},
	showHome: function () {
		var homePageLayoutView = new HomePageLayoutView();
		this.rootLayoutView.getRegion('main').show(homePageLayoutView);
	},
	showProfile: function () {
		var profilePageLayoutView = new ProfilePageLayoutView();
		this.rootLayoutView.getRegion('main').show(profilePageLayoutView);
	},
	defaultRoute: function(){
		Backbone.history.navigate('home', {trigger: true});
	}
});