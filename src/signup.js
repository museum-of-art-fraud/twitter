$('.signup').on('click', function (event) {
	event.preventDefault();

	var fullName = $('.full-name').val();
	var email = $('.email').val();
	var password = $('.password').val();

	$.post('http://localhost:3000/signup', {
		fullName: fullName,
		email: email,
		password: password
	});
});