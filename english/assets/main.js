const nav = document.getElementById('navigation-wrapper');
const menu = document.getElementById('menu');
const close = document.getElementById('close');
const main = document.querySelector('main');
const linkes = document.querySelectorAll('.link');

menu.addEventListener('click', function () {
	nav.classList.add('active');
	close.style.display = 'block';
	this.style.display = 'none';
});

close.addEventListener('click', function () {
	nav.classList.remove('active');
	this.style.display= 'none';
	menu.style.display = 'block';
})

/*----Pour faire disparaitre le menu lorsquons clique sur le menu j'ai initialement
mis l'event listener sur le "body", mais j'ai compris le header aussifaisait partir du "body". 
Et puisse que ca fait parti du body lorsquons appuis sur "menu" qui lui se trouve dans le "header" 
c'est comme si ont demander au "body" de fermer le "menu" alors qui n'est meme par encore ouvert. 
Donc la solution est de retirer le "header" du body. Cela veut juste dire qui faut mettre l'event 
sur le "main" qui est juste appres le "header".*/

const body = document.body;//on ne peut donc pas mettre l'event sur ce élément 

main.addEventListener('click', function () {
	// tranformation de la list de class du contenant de la navigation en array.
	let num = Array.from(nav.classList);

    //Nous vérifions si la class 'active' se trouve dans l'array.
	if (num.indexOf('active') !== -1)  {

    //Si oui, on l'enleve, on enleve également le button "close" et on fait reaparraitre le button 'menu' 
		nav.classList.remove('active');
		close.style.display= 'none';
	    menu.style.display = 'block';
	}
})

linkes.forEach(link =>{
	link.addEventListener('click', function () {
		// body...
		nav.classList.remove('active');
		close.style.display= 'none';
	    menu.style.display = 'block';
	})
})

/*--------------Initialization du dictionnaire----------------*/

const mot = document.querySelector('.dico').value;
const dico_form = document.querySelector('.dico_form');
const output = document.querySelector('.output')

let dictionnaire = {
	papa:"father",
	maman:"mother",
	tante: "aunte",
	frère:"brother"
}

function trouverMots(e) {
	// body...
	e.preventDefault();
	const mot = document.querySelector('.dico').value;
	const format_mot = mot.toLowerCase();
	const search = dictionnaire[format_mot];
	output.style.display = "block";
	if (search === undefined) {
		output.style.color = "red";
		return output.innerHTML = "Désolé! Le mot que vous recherchez ne se trouve pas dans notre dictionnaire."
	}
	output.style.color = "green";
	return output.innerHTML = search;
}

dico_form.addEventListener('submit', trouverMots);