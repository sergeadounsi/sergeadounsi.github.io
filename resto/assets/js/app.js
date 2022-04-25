//-------CODE JavaScript Projet: resyo
//------2022-----//


//----AFFICHAGE DU MENU SUR MOBILE-----//
const show = document.getElementById('show');
const close = document.getElementById('close');
const nav = document.getElementById('navList');

show.addEventListener('click', function () {
	// body...
	nav.classList.add('active');
	show.style.display='none';
	close.style.display='block';
})

close.addEventListener('click', function () {
	// body...
	nav.classList.remove('active');
	close.style.display='none';
	show.style.display='block';
})

//-----FAIRE DISPARAITRE LE MENU LORSQU'UN LIEN EST CLICKE----//
const links = document.querySelectorAll('.link');
links.forEach(link =>{
	link.addEventListener('click', function () {
		// body...
		/*const show = document.getElementById('show');
        const close = document.getElementById('close');
        const nav = document.getElementById('navList');*/
		nav.classList.remove('active');
	    close.style.display='none';
	    show.style.display='block';
	})
})