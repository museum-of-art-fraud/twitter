var RootLayoutView = Marionette.LayoutView.extend({
	el: 'body',
	events: {
		'click .create-tweet': 'openCreateTweetModal',
		'click .messages': 'openMessenger'
	},
	regions: {
		main: '.main-region',
		modal: '.modal-region'
	},
	initialize: function (options) {
		this.tweetCollection = options.tweetCollection;
		this.messageCollection = options.messageCollection;
	},
	openCreateTweetModal: function () {
		var createTweetItemView = new CreateTweetItemView({tweetCollection: this.tweetCollection});
		this.getRegion('modal').show(createTweetItemView);
	},
	openMessenger: function () {
		var messengerCompositeView = new MessengerCompositeView({collection: this.messageCollection});
		this.getRegion('modal').show(messengerCompositeView);
		this.messageCollection.fetch();
	}
});