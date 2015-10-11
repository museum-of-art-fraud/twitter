var RootLayoutView = Marionette.LayoutView.extend({
	el: 'body',
	events: {
		'click .create-tweet': 'openCreateTweetModal'
	},
	regions: {
		main: '.main-region',
		modal: '.modal-region'
	},
	initialize: function (options) {
		this.tweetCollection = options.tweetCollection;
	},
	openCreateTweetModal: function () {
		var createTweetItemView = new CreateTweetItemView({tweetCollection: this.tweetCollection});
		this.getRegion('modal').show(createTweetItemView);
	}
});