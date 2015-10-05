var TrendCompositeView = Marionette.CompositeView.extend({
	tagName: 'ul',
	className: 'list-unstyled',
	childView: TrendItemView,
	template: '#trends',
	childViewContainer: '#trends-list'
});