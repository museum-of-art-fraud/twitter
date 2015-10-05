var WhoToFollowCompositeView = Marionette.CompositeView.extend({
	childView: WhoToFollowItemView,
	childViewContainer: '.medias',
	template: '#who-to-follow-composite-view-template'
});