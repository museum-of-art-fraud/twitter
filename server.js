var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.json({
  	'hello': 'world'
  });
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
	res.json([
		{author: 'Jack Bill', text: 'Here the text of the news 1 goes'},
		{author: 'Marry Key', text: 'Here the text 2 goes'},
		{author: 'Clue Bill', text: 'The text 3 of the news 1 goes'},
		{author: 'Lilly Key', text: 'Here the text 4 goes'}
	]);
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

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})