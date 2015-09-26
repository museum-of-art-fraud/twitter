var User = Backbone.Model.extend({});
var Twit = Backbone.Model.extend({});
var Trend = Backbone.Model.extend({});

var Users = Backbone.Collections.extend({
	model: User
});
var Twits = Backbone.Collections.extend({
	model: Twit
});
var Trends = Backbone.Collections.extend({
	model: Trend
});

var UserSuggestionView = Marionette.ItemvView.extend({});