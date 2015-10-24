var MessengerCompositeView = Marionette.CompositeView.extend({
	childView: MessageItemView,
	childViewContainer: '.messages',
	template: '#messenger-composite-view-template',
	className: 'modal fade',
	events: {
		'click .send-message': 'sendMessage'
	},
	initialize: function () {
		var that = this;
		socket.on('newMessage', function (data) {
			var messageModel = new MessageModel(data);
			that.collection.add(messageModel);
		});
	},
	onShow: function () {
		this.$el.modal('show');
	},
	sendMessage: function () {
		var newMessage = this.$el.find('.message-input').val();
		this.collection.create({
			text: newMessage,
			clientId: socket.id
		});
	}
});