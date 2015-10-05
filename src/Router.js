var Router = Marionette.AppRouter.extend({
	appRoutes: {
		home: 'showHome',
		profile: 'showProfile',
		'*path': 'defaultRoute'
	}
});