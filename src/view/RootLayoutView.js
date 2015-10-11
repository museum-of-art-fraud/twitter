var RootLayoutView = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
		main: '.main-region',
		modal: '.modal-region'
	},
	initialize: function(options){
		this.tweetCollection = options.tweetCollection;
	},
	events: {
		'click .create-tweet': 'openCreateTweetModal'
	},
	openCreateTweetModal: function(){
		var createTweetItemView = new CreateTweetItemView({
			tweetCollection: this.tweetCollection
		});
		this.getRegion('modal').show(createTweetItemView);
	}
});