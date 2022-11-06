const navMenu = document.getElementById('nav');
const navToggle = document.getElementById('nav_toggle');
const navClose = document.getElementById('nav_close');

if (navToggle) {
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show_menu');
		navToggle.style.display = 'none';
	})
}

if (navClose) {
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show_menu');
		navToggle.style.display = 'block';
	})
}

/*==========Scroll top ===========*/

function scrollToTop() {
	const scrollTop = document.getElementById('scroll_top');
	if (this.scrollY >= 200) {
		scrollTop.classList.add('show_scroll_top');
	} else {
		scrollTop.classList.remove('show_scroll_top');
	}
}

window.addEventListener('scroll', scrollToTop);

/*==========Scroll Header ===========*/

function changeColor() {
	const header = document.getElementById('header');
	if (this.scrollY >= 100) {
		header.classList.add('scroll_header');
	} else {
		header.classList.remove('scroll_header');
	}
}

window.addEventListener('scroll', changeColor);


const navLinks = document.querySelectorAll('.nav_link');
function linkAction () {
	const navMenu = document.getElementById('nav');
	navMenu.classList.remove('show_menu');
	navToggle.style.display = 'block';
}

navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=========ScroolReveal=======*/
window.sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 2500,
	delay:400
});
sr.reveal('.showcase_image');

sr.reveal('.showcase', {origin: 'left', delay: 300})
sr.reveal('.f1', {origin: 'left', delay: 400})
sr.reveal('.f2', {delay: 400})
sr.reveal('.f3', {origin: 'right',delay: 400})
sr.reveal('.about_img', {origin: 'left', delay: 300})
sr.reveal('.about_text', {origin: 'right',delay: 400})
sr.reveal('.more_info', {origin: 'right', delay: 300})
sr.reveal('.help', {origin: 'left', delay: 300})
sr.reveal('.trick1', {delay: 300})
sr.reveal('.trick3', {origin: 'left', delay: 400})
sr.reveal('.p_card', {delay: 400})
sr.reveal('.p_card3', {origin: 'bottom', delay: 400})
sr.reveal('.member', {delay: 400})
sr.reveal('.client-1', {origin: 'left', delay: 400})
sr.reveal('.client-2', {origin: 'right', delay: 400})
sr.reveal('.box_1', {delay: 400})
sr.reveal('.box_2', {origin: 'left', delay: 300})
sr.reveal('.box_3', {delay: 300})
sr.reveal('.contact_us_session', {delay: 400})

