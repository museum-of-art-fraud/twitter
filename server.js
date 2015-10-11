var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

var tweets = [
	{author: 'Jack Bill', text: 'Here the text of the news 1 goes', published: 1444572391837, imageUrl: 'https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg'},
	{author: 'Marry Key', text: 'Here the text 2 goes', published: 1444572403513, imageUrl: 'https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg'},
	{author: 'Clue Bill', text: 'The text 3 of the news 1 goes', published: 1444572406073, imageUrl: 'https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg'},
	{author: 'Lilly Key', text: 'Here the text 4 goes', published: 1444572410359, imageUrl: 'https://pbs.twimg.com/profile_images/643463843541155841/pmMygGUP_bigger.jpg'}
];

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
	res.json(tweets);
});

app.post('/tweets', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	tweets.push(req.body);
	res.json(tweets);
});

app.get('/trends', function (req, res) {
	res.set('Access-Control-Allow-Origin', '*');
	res.json([
		{name: '#Marr'},
		{name: 'Jean de Villiers'},
		{name: '#танцынатнт'},
		{name: 'Cereal Cafe'},
		{name: '#GratefulYammouni'},
		{name: 'Sanusi'},
		{name: '#НасосБезСмс'},
		{name: 'Ron Dennis'},
		{name: '#ThankYouALDUBNation'},
		{name: 'Frank Tyson'}
	]);
});

app.get('/users/:id', function (req, res) {
	var users = [
		{name: 'hello'},
		{name: 'world'}
	];
	res.json(users[req.params.id]);
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});
