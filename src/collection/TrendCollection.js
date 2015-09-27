var TrendCollection = Backbone.Collection.extend({
	model: TrendModel,
	url: 'http://localhost:3000/trends'
});