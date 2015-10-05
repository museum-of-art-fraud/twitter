var Application = new Marionette.Application();


Application.on('start', function(){
	var controller = new Controller();
	this.router = new Router({ controller: controller });
	Backbone.history.start();

});
