const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const items = document.querySelectorAll('.slider_img');
const puces = document.querySelectorAll('.puce');

const nbSlide = items.length;
const nbPuces = puces.length;

const suivant = document.querySelector('.right');
const precedent = document.querySelector('.left');
const pucesActive = document.querySelector('.selected')


let count = 0; 



let afficheText = document.querySelector(".affiche_text");
afficheText.innerHTML = `${slides[count].tagLine}`;

suivant.addEventListener('click', slideSuivante);


function slideSuivante(){
	items[count].classList.remove('active');
	puces[count].classList.remove('selected');

	if(count < nbSlide - 1){
		count++;
	}else {
		count = 0;
	}

	items[count].classList.add('active');
	puces[count].classList.add('selected');

	afficheText.innerHTML = slides[count].tagLine;
	

	console.log(count);
	console.log(slides[count].tagLine);
	
}

precedent.addEventListener('click', slidePrecedente);

function slidePrecedente(){
	items[count].classList.remove('active');
	puces[count].classList.remove('selected');


	if(count > 0){
		count--;
	}else {
		count = nbSlide -1;
	}

	items[count].classList.add('active');
	puces[count].classList.add('selected');

	afficheText.innerHTML = slides[count].tagLine;

	console.log(count);
	console.log(slides[count].tagLine);

}






