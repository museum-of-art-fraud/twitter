var TweetCollection = Backbone.Collection.extend({
	url: 'http://' + location.hostname + ':3000/tweets',
	model: TweetModel,
	comparator: function(item){
		return  - item.get('published');
	}
});