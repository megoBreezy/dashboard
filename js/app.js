const hamburger = document.querySelector('.hamburger'),
	nav = document.querySelector('.nav'),
	overlay = document.getElementById('overlay');

hamburger.addEventListener('click', function(e) {
	e.preventDefault();

	this.classList.toggle('is-active');
	nav.classList.toggle('is-active');
	document.body.classList.toggle('body-overflow');
	overlay.classList.toggle('is-active');
});

overlay.addEventListener('click', function(e) {
	hamburger.classList.remove('is-active');
	nav.classList.remove('is-active');
	document.body.classList.remove('body-overflow');
	overlay.classList.remove('is-active');
});