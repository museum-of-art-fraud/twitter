var MessageCollection = Backbone.Collection.extend({
	model: MessageModel,
	url: 'http://' + location.hostname + ':3000/messages',
});