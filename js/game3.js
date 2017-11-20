// javascript library for simple game development

var tas = false;
var geld = false;
var wekker = false;
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');

function startlevel(event){
	document.getElementById('level_title').innerHTML = 'Je slaapt, word wakker!';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('info').src = 'img/info.jpg';
	document.getElementById('third_image', 'geld1').onclick = function()
	{

		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
		document.getElementById('second_image').onclick = function()
		{	
		wekker = true;
		document.getElementById('second_image').style.display = 'none';
		}
		opt1.innerHTML = 'starten';
		opt1.onclick = wakker;
		}

function wakker(event) {
	document.getElementById('level_title').innerHTML = 'Je word wakker en herinnert je niets meer.... '
	document.getElementById('level_image').src = 'img/nergens.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('second_image').src = 'img/geld.jpg';
	document.getElementById('third_image').onclick = function()
	{
		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
	opt1.innerHTML = 'Liften';
	opt1.onclick = liften;
	opt2.innerHTML = 'De bus';
	opt2.onclick = Debus;
}

function level2(event){
	document.getElementById('level_title').innerHTML = 'Je hebt gekozen om te liften! Maar wat nu?';
	document.getElementById('level_image').src = 'img/liften.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('third_image').onclick = function()
	{
		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
	opt1.innerHTML = 'Liften';
	opt1.onclick = liften;
	opt2.innerHTML = 'Liften';
	opt2.onclick = liften;

}

function liften(event){
	document.getElementById('level_title').innerHTML = 'Een busje stopt langs de weg, Stap je in?';
	document.getElementById('level_image').src = 'img/papier.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('third_image').onclick = function()
	{
		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
	opt1.onclick = 'ingestapt';
	opt1.onclick = ingestapt;
	opt2.innerHTML = 'Wachten';
	opt2.onclick = Wachten;

}

function ingestapt(event){
	document.getElementById('level_title').innerHTML = 'De chauffeur zet je af bij n afrit van de snelweg. Maar wat nu?';
	document.getElementById('level_image').src = 'img/afrit.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('third_image').onclick = function()
	{
		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
	opt1.innerHTML = 'verder lopen';
	opt1.onclick = lopen;
	opt2.innerHTML = 'De bus';
	opt2.onclick = Debus;

}

function lopen(event){
	document.getElementById('level_title').innerHTML = 'Je loopt nu al een paar uur. Waar ben je?.';
	document.getElementById('level_image').src = 'img/lost.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('third_image').onclick = function()
	{
		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
	opt1.innerHTML = 'liften';
	opt1.onclick = liften;
	opt2.innerHTML = 'Terug naar de bus';
	opt2.onclick = Debus;

}


function Debus(event){
	document.getElementById('level_title').innerHTML = 'Je ziet de bus die je nodig hebt om thuis te komen. gebruik iets uit je tas!';
	document.getElementById('level_image').src = 'img/bushalte.jpg';
	document.getElementById('second_image').style.display = 'block';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('second_image').src = 'img/tas.jpg';
	document.getElementById('second_image').onclick = function()
	{	
		tas = true;
		document.getElementById('second_image').style.display = 'none';
	}
	opt1.innerHTML = 'instappen';
	opt1.onclick = inbus;
	opt2.innerHTML = 'wachten';
	opt2.onclick = Wachten;
	}





function instappen(event){
	document.getElementById('level_title').innerHTML = 'Je ziet de bus die je nodig hebt';
	document.getElementById('level_image').src = 'img/lost.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('second_image').src = 'img/tas.jpg';



}

function inbus(event){
	if (tas == true) {
	document.getElementById('level_title').innerHTML = 'Eindelijk zit je in de bus, honger gekregen?';
	document.getElementById('level_image').src = 'img/indebus.jpg';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').src = 'img/snack.jpg';
	document.getElementById('second_image').src = 'img/eten.jpg';
	}
	else{ 
		alert('Je hebt de tas nodig om in te stappen!');
	}
}

function wakker(event){
	if (wekker == true) {
	document.getElementById('level_title').innerHTML = 'Je bent wakker, maar waar ben je?';
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('level_image').src = 'img/nergens.jpg';
	document.getElementById('second_image').src = 'img/wekker.jpg';
	opt1.onclick = 'liften';
	opt1.onclick = liften;
	opt2.innerHTML = 'De Bus';
	opt2.onclick = Debus;
	}
	else{ 
		alert('Je moet de wekker gebruiken om wakker te worden!');
	}
}


function Wachten(event){
	document.getElementById('level_title').innerHTML = "Je staat te wachten, er zijn nu twee opties!"
	document.getElementById('level_image').src = 'img/wachten.jpg';
	document.getElementById('second_image').style.display = 'block';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
	document.getElementById('info').style.display = 'none';
	document.getElementById('option2').style.display = 'block';
	document.getElementById('second_image').src = 'img/tas.jpg';
	document.getElementById('second_image').onclick = function()
	{	
		tas = true;
		document.getElementById('second_image').style.display = 'none';
	}
	opt1.innerHTML = 'instappen';
	opt1.onclick = inbus;
	opt2.innerHTML = 'Lopen';
	opt2.onclick = lopen;
	}
startlevel();
	// only allow option 2 if user has a key in his inventory
