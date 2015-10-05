var application = new Marionette.Application();

application.on('start', function () {
	var controller = new Controller();
	var router = new Router({controller: controller});
	Backbone.history.start();
});