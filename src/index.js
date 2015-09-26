var User = Backbone.Model.extend({});

var Users = Backbone.Collection.extend({
	model: User
});

var UserSuggestionView = Marionette.ItemView.extend({
	className: 'media',
	template: '#user-suggestion',
	//onRender: function () {
	//	this.$el = this.$el.children();
	//	this.$el.unwrap();
	//	this.setElement(this.$el);
	//}
});

var UsersSuggestionView = Marionette.CollectionView.extend({
	childView: UserSuggestionView
});

var users = new Users([
	{name: 'hello'},
	{name: 'world'}
]);

var usersSuggestionView = new UsersSuggestionView({
	collection: users,
	el: '.medias'
});

usersSuggestionView.render();