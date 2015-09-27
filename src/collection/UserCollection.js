var UserCollection = Backbone.Collection.extend({
	url: 'http://localhost:3000/users',
	model: UserModel
});