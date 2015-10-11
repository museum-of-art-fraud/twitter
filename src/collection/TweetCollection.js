var TweetCollection = Backbone.Collection.extend({
	url: 'http://localhost:3000/tweets',
	model: TweetModel,
	comparator: function (model) {
		return -model.get('published');
	}
});