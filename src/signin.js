$('.signin').click(function(event){

	event.preventDefault();
	var email = $('.inputEmail').val();
	var password = $('.inputPassword').val();

	$.post('http://localhost:3000/signin', { email: email, password: password } );
});