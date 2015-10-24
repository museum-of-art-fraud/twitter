var UserCollection = Backbone.Collection.extend({
	url: 'http://' + location.hostname + ':3000/users',
	model: UserModel
});