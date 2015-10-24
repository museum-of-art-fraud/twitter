var MessengerCompositeView = Marionette.CompositeView.extend({
	childView: MessageItemView,
	template: '#messages',
	childViewContainer: '#messages-list',
	className: 'modal fade',
	initialize: function(){
		var that = this;
		socket.on('newMessage', function(data){
			var messageModel = new MessageModel(data);
			that.collection.add(messageModel);
		});

	},
	events: {
		'click .send-message': 'sendMessage'
	},
	onShow: function(){
		this.$el.modal('show');
	},
	sendMessage: function(){
		var newMessage = this.$el.find('.message-input').val();
		// console.log(newMessage);
		this.collection.create({
			text: newMessage,
			clientId: socket.id
		});
	}
});