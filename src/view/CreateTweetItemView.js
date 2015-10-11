var CreateTweetItemView = Marionette.ItemView.extend({
	template: '#create-tweet-modal-template',
	className: 'modal fade',
	initialize: function(options){
		this.tweetCollection = options.tweetCollection;
	},
	onShow: function(){
		this.$el.modal('show');
	},

	events: {
		'click .compose-tweet': 'composeTweet'
	},

	composeTweet: function(){
		var newTweet = this.$el.find('.tweet-content').val();
		console.log(newTweet);
		this.tweetCollection.create(
			{
				text: newTweet,
				author: 'Sargon Piraev',
				published: Date.now(),
				imageUrl: 'https://pbs.twimg.com/profile_images/531414442739646464/Hc6G_ekH_400x400.jpeg'
			}
		);
	}
});