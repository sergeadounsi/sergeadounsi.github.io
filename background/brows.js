const colors = [
	             "red", 
				 "blue", 
				 "black", 
				 "white", 
				 "green", 
				 "grey", 
				 "yellow", 
				 "orange", 
				 "darkred"
               ]
const red = document.querySelector('.red');
const blue = document.querySelector('.blue');
const black = document.querySelector('.black');
const seagreen = document.querySelector('.seagreen');
const green = document.querySelector('.green');
const purple = document.querySelector('.purple');
const yellow = document.querySelector('.yellow');
const orange = document.querySelector('.orange');
const darkred = document.querySelector('.darkred');
const text = document.querySelector('.text');

const main = document.getElementById('main');
main.style.transition = '1s';

red.addEventListener('click', ()=>{
	main.style.backgroundColor = 'red';
	text.style.color = 'red';
})

orange.addEventListener('click', ()=>{
	main.style.backgroundColor = 'orange';
	text.style.color = 'orange';
})

darkred.addEventListener('click', ()=>{
	main.style.backgroundColor = 'darkred';
	text.style.color = 'darkred';
})

yellow.addEventListener('click', ()=>{
	main.style.backgroundColor = 'yellow';
	text.style.color = 'yellow';
})

blue.addEventListener('click', ()=>{
	main.style.backgroundColor = 'blue';
	text.style.color = 'blue';
})

black.addEventListener('click', ()=>{
	main.style.backgroundColor = 'black';
	text.style.color = 'black';
})

green.addEventListener('click', ()=>{
	main.style.backgroundColor = 'green';
	text.style.color = 'green';
})

seagreen.addEventListener('click', ()=>{
	main.style.backgroundColor = 'mediumseagreen';
	text.style.color = 'mediumseagreen';
})

purple.addEventListener('click', ()=>{
	main.style.backgroundColor = 'purple';
	text.style.color = 'purple';
})

 
/*--------Date Formating--------*/
var today = new Date();
var day = today.getDay();
var month = today.getMonth();
var year = today.getFullYear();
var result = day +" /"+ month + " /"+ year;
var print = document.getElementById('print');
print.innerHTML = result;