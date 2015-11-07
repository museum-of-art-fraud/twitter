$('.signup').click(function(event){

	event.preventDefault();
	var email = $('.inputEmail').val();
	var password = $('.inputPassword').val();
	var fullname = $('.inputFullName').val();

	$.post('http://localhost:3000/signup', { email: email, password: password, fullname: fullname } );
});