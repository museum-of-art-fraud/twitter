var TrendCollection = Backbone.Collection.extend({
	url: 'http://' + location.hostname + ':3000/trends',
	model: TrendModel
});