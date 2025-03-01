const navbar = document.getElementById('navbar');
const menu = document.getElementById('menu');
const icon = document.getElementById('icon');
let openNavbar = false;

navbar.addEventListener('click', function () {
	openNavbar = !openNavbar;
	menu.classList.toggle('active', openNavbar);
	icon.className = openNavbar ? 'fa-solid fa-x' : 'fa-solid fa-bars';
});
