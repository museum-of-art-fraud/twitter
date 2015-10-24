application.start();

var socket = io.connect('http://' + location.hostname + ':4000');
socket.on('connect', function () {
	console.log('connected to server');
});
