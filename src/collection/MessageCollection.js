var MessageCollection = Backbone.Collection.extend({
	url: 'http://' + location.hostname + ':3000/messages',
	model: MessageModel
});