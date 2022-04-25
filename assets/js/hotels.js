/*---------INITIALISATION DES VARIABLES----------------*/
let menu_icon = document.getElementById('menu-icon');
let nav = document.getElementById('navigation');
let menu_close = document.getElementById('menu-close');
let links = document.querySelectorAll('.link');


/*--------OUVRIRE LE MENU---------------------------*/
menu_icon.addEventListener('click', ()=>{
	nav.classList.add('active');
	menu_icon.style.display = 'none';
	menu_close.style.display = 'block';
})

/*----------------FERMER LE MENU-------------------*/
menu_close.addEventListener('click', ()=>{
	nav.classList.remove('active');
	menu_close.style.display = 'none';
	menu_icon.style.display = 'block';
})

/*----------FERMER LE MENU LORSQU'ON APPUI SUR UN LIEN----------*/
links.forEach(link =>{
	link.addEventListener('click', function () {
		nav.classList.remove('active');
		menu_close.style.display = 'none';
	    menu_icon.style.display = 'block';
	})
})



