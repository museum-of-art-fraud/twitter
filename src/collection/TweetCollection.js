var TweetCollection = Backbone.Collection.extend({
	model: TweetModel,
	url: 'http://localhost:3000/tweets'
});