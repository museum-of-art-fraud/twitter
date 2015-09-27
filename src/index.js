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

// Tweets display
var tweets = new Tweets([
	{author: 'Jack Bill', text: 'Here the text of the news 1 goes'},
	{author: 'Marry Key', text: 'Here the text 2 goes'},
	{author: 'Clue Bill', text: 'The text 3 of the news 1 goes'},
	{author: 'Lilly Key', text: 'Here the text 4 goes'}
]);

var tweetCollecionView = new TweetCollectionView({
	collection: tweets,
	el: '.tweets-block'
});

tweetCollecionView.render();