var CreateTweetItemView = Marionette.ItemView.extend({
	template: '#create-tweet-modal-template',
	className: 'modal fade',
	events: {
		'click .compose-tweet': 'composeTweet'
	},
	initialize: function (options) {
		this.tweetCollection = options.tweetCollection;
	},
	onShow: function () {
		this.$el.modal('show');
	},
	composeTweet: function () {
		console.log(555)
		var newTweet = this.$el.find('.tweet-content').val();
		this.tweetCollection.create({
			text: newTweet,
			author: 'Sargon Piraev',
			published: Date.now(),
			imageUrl: 'https://pbs.twimg.com/profile_images/531414442739646464/Hc6G_ekH_400x400.jpeg'
		});
	}
});