$('.signin').on('click', function (event) {
	event.preventDefault();

	var email = $('.email');
	var password = $('.password');

	$.post('http://localhost:3000/signin', {
		email: email,
		password: password
	});
});