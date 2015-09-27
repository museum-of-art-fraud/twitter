var TrendCollection = Backbone.Collection.extend({
	url: 'http://localhost:3000/trends',
	model: TrendModel
});