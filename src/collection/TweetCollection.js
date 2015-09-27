var TweetCollection = Backbone.Collection.extend({
	url: 'http://localhost:3000/tweets',
	model: TweetModel
});