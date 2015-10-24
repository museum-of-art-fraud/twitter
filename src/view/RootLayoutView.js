var RootLayoutView = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
		main: '.main-region',
		modal: '.modal-region'
	},
	initialize: function(options){
		this.tweetCollection = options.tweetCollection;
		this.messageCollection = options.messageCollection;
	},
	events: {
		'click .create-tweet': 'openCreateTweetModal',
		'click .messages': 'openMessenger'
	},
	openCreateTweetModal: function(){
		var createTweetItemView = new CreateTweetItemView({
			tweetCollection: this.tweetCollection
		});
		this.getRegion('modal').show(createTweetItemView);
	},
	openMessenger: function(){
		var messengerCompositeView = new MessengerCompositeView({
			collection: this.messageCollection
		})
		this.messageCollection.fetch();
		this.getRegion('modal').show(messengerCompositeView);
	}
});