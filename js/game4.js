var geld = false;
var wekker = false;
var bril = false;
var snack = false;
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');

function startlevel(event){
	document.getElementById('level_title').innerHTML = 'Je slaapt maar het word tijd dat je wakker word!';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('info').src = 'img/info.jpg';
	document.getElementById('third_image').onclick = function()
	{

		geld = true;
		document.getElementById('third_image').style.display = 'none';
		}
		document.getElementById('fourth_image').onclick = function()
		{	
		bril = true;
		document.getElementById('fourth_image').style.display = 'none';
		}
		document.getElementById('second_image').onclick = function()
		{	
		wekker = true;
		document.getElementById('second_image').style.display = 'none';
		}
		document.getElementById('fifth_image').onclick = function()
		{	
		snack = true;
		document.getElementById('fifth_image').style.display = 'none';
		}
		opt1.innerHTML = 'starten';
		opt1.onclick = start;
		}


function start(event){
	if (wekker == true) {
	document.getElementById('level_title').innerHTML = 'Je bent wakker maar ziet niet scherp';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('info').style.display = 'none';
	document.getElementById('uitleg').style.display = 'none';
	document.getElementById('fourth_image').style.display = 'block';
	document.getElementById('level_image').src = 'img/nergens.jpg';
	document.getElementById('second_image').src = 'img/wekker.jpg';
	document.getElementById('fourth_image').onclick = function()
		{	
		bril = true;
		document.getElementById('fourth_image').style.display = 'none';

	}
	opt1.innerHTML = 'scherper zien';
	opt1.onclick = bril;
	}
	else{ 
		alert('Je moet de wekker gebruiken om wakker te worden!');
	}
}

	function bril(event){
	if(bril == true){
	document.getElementById('level_image').src = 'img/real.jpg';
	document.getElementById('level_title').innerHTML = 'Goed bezig! Vind nu de weg naar huis!';
	}
	else{
		alert('Je ziet niet scherp');
	}
}
startlevel();
