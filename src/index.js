var User = Backbone.Model.extend({});
var Tweet = Backbone.Model.extend({});
var Trend = Backbone.Model.extend({});

var Users = Backbone.Collection.extend({
	model: User
});
var Tweets = Backbone.Collection.extend({
	model: Tweet
});
var Trends = Backbone.Collection.extend({
	model: Trend
});

var UserSuggestionView = Marionette.ItemView.extend({
	template: ''
});

