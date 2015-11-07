var express = require('express');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
var mongoose = require('mongoose');

var MONGO_URI = 'mongodb://' + process.env.MONGO_USER + ':' + process.env.MONGO_PASSWORD + '@ds045604.mongolab.com:45604/twitter';

mongoose.connect(MONGO_URI, function () {
	console.log('mongo connected');
});

var Tweet = mongoose.model('Tweet', {
	author: String,
	text: String,
	published: Number,
	imageUrl: String
});

var Trend = mongoose.model('Trend', {
	name: String
});

var Message = mongoose.model('Message', {
	clientId: String,
	text: String
});

var User = mongoose.model('User', {
	fullName: String,
	email: String,
	password: String,
	token: String
});

var app = express();

app.use(bodyParser());

app.options('*', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.set('Access-Control-Allow-Headers', 'Content-Type');
	res.sendStatus(200);
});

app.get('/users', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.json([
		{name: 'hello'},
		{name: 'world'}
	]);
});

app.get('/tweets', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	Tweet.find({}, function (err, tweets) {
		res.json(tweets);
	});
});

app.post('/tweets', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	Tweet.create(req.body, function (err, tweet) {
		res.json(tweet);
	});
});

var messages = [];

app.get('/messages', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	Message.find({}, function (err, messages) {
		res.json(messages);
	});
});

app.post('/messages', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	Message.create(req.body, function (err, message) {
		res.json(message);
		io.sockets.connected[req.body.clientId].broadcast.emit('newMessage', req.body);
	});
});

app.get('/trends', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	Trend.find({}, function (err, trends) {
		res.json(trends);
	});
});

app.get('/users/:id', function (req, res) {
	var users = [
		{name: 'hello'},
		{name: 'world'}
	];
	res.json(users[req.params.id]);
});

app.post('/signup', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	User.create(req.body, function (err, user) {
		res.json(user);
	});
});

app.post('/signin', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	User.find({ email: req.body.email }, function (err, user) {
		if (user != null) {
			if (user.password === req.body.password) {
				res.sendStatus(200);
			}
		}
	});
});

var io = socketio();

io.on('connection', function () {
	console.log('client connected');
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});

io.listen(4000);

