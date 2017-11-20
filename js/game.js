// javascript library for simple game development

var geld = false;
var wekker = false;
var bril = false;
var snack = false;
var papieren = false;
var opt1 = document.getElementById('option1');
var opt2 = document.getElementById('option2');
  

    
function pad ( val ) { return val > 9 ? val : "0" + val; }

var sec = 0;

setInterval(function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);

function startlevel(event){
	console.log("startlevel");
	document.getElementById('level_title').innerHTML = 'Je slaapt maar het word tijd dat je wakker word!';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('seventh_image').style.display = 'none';
	document.getElementById('fifth_image').style.display = 'none';
	document.getElementById("seconds").innerHTML=pad(++sec%60);
	document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
	document.getElementById('sixth_image').src = 'img/papieren.jpg';
	document.getElementById('info').src = 'img/info.jpg';
		opt1.innerHTML = 'Wakker worden?';
		opt1.onclick = start;

	document.getElementById('second_image').onclick = function(){	
		wekker = true;
		document.getElementById('second_image').style.display = 'none';
	}
}
	
			

function start(event){
	if (wekker == true){
		console.log("start");
		document.getElementById('level_title').innerHTML = 'Je bent wakker maar ziet niet scherp! Wat zou je kunnen doen?';
		document.getElementById('option2').style.display = 'none';
		document.getElementById('info').style.display = 'none';
		document.getElementById('uitleg').style.display = 'none';
		document.getElementById('fourth_image').style.display = 'block';
		document.getElementById('level_image').src = 'img/nergens.jpg';
			opt1.innerHTML = 'Scherper zien?';
			opt1.onclick = nergens;

	document.getElementById('fourth_image').onclick = function(){	

		bril = true;
		document.getElementById('fourth_image').style.display = 'none';
	}
			}
	else{ 
		alert('Je moet de wekker gebruiken om wakker te worden!');
		}
	}

//Hier boven klopt het!^^

function nergens(event){
	if (bril == true){
	console.log("nergens");
	document.getElementById('level_image').src = 'img/real.jpg';
	document.getElementById('option2').style.display = 'inline-block';
	document.getElementById('second_image').style.display = 'none';
	document.getElementById('level_title').innerHTML = 'Goed bezig! Vind nu de weg naar huis!';
		opt1.innerHTML = 'Met de bus?';
		opt1.onclick = Debus;
		opt2.innerHTML = 'Liften?';
		opt2.onclick = liften;

	document.getElementById('sixth_image').onclick = function(){	

		papieren = true;
		document.getElementById('sixth_image').style.display = 'none';
	}
			}
	else{ 
		alert('Je moet wat doen om verder te komen');
		}
	}

function Debus(event){
	console.log("Debus");
	document.getElementById('level_title').innerHTML = 'Je ziet de bus die je nodig hebt.';
	document.getElementById('level_image').src = 'img/bushalte.jpg';
	document.getElementById('second_image').style.display = 'none';
	document.getElementById('third_image').style.display = 'block';
		opt1.innerHTML = 'instappen';
		opt1.onclick = inbus;
		opt2.innerHTML = 'wachten';
		opt2.onclick = wachten;

	document.getElementById('third_image').onclick = function(){

		geld = true;
		document.getElementById('third_image').style.display = 'none';
	}
	}

function inbus(event){
	if (geld == true){
		console.log("inbus");
		document.getElementById('level_title').innerHTML = 'Eindelijk zit je in de bus, honger gekregen?';
		document.getElementById('level_image').src = 'img/indebus.jpg';
		document.getElementById('second_image').style.display = 'none';
		document.getElementById('sixth_image').style.display = 'none';
		document.getElementById('option2').style.display = 'none';
			opt1.innerHTML = 'Bijna thuis!';
			opt1.onclick = uitdeauto;
			}
	else{ 
		alert('Je hebt het geld nodig om in te stappen!');
		}
	}

function wachten(event){
	console.log("wachten");
	document.getElementById('level_image').src = 'img/wachten.jpg';
	opt1.innerHTML = 'instappen';
	opt1.onclick = inbus;
	opt2.innerHTML = 'lopen';
	opt2.onclick = lopen;
}

function lopen(event){
	console.log("Lopen");
	document.getElementById('level_title').innerHTML = 'Je bent verdwaald. En je weet niet de weg terug';
	document.getElementById('level_image').src = 'img/lost.jpg';
	document.getElementById('second_image').style.display = 'none';
	document.getElementById('third_image').style.display = 'none';
	document.getElementById('fourth_image').style.display = 'none';
	document.getElementById('third_image').style.display = 'none';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('uitleg').innerHTML = 'Je kunt niet verder begin overnieuw!!';
	opt1.innerHTML = 'Verdwaald';
	opt1.onclick = verdwaald;

}

function verdwaald(event){
	console.log("verdwaald");
	document.getElementById('level_title').innerHTML = 'Je bent verdwaald. En je weet niet de weg terug';
	document.getElementById('level_image').src = ('img/gameover.jpg');
	document.getElementById('second_image').style.display = 'block';
	document.getElementById('uitleg').innerHTML = 'Je kunt niet verder begin overnieuw!!';
		opt1.innerHTML = 'Overnieuw beginnen!';
		opt1.onclick = gameover;

}

function gameover(event){
	if(snack == true){
		console.log("gameOver");
		document.getElementById('level_title').innerHTML = 'Je bent verdwaald. ';
		document.getElementById('second_image').style.display = 'block';
		document.getElementById('uitleg').innerHTML = 'Je kunt niet verder begin overnieuw!!';
			opt1.innerHTML = 'Overnieuw beginnen';
			}
	else{
		alert('Gebruik de snack om terug te keren!');
	}

}

function liften(event){
	if (papieren == true){
		console.log("liften");
		document.getElementById('level_title').innerHTML = 'Een auto stopt langs de weg, Stap je in?';
		document.getElementById('level_image').src = 'img/papier.jpg';
		document.getElementById('third_image').style.display = 'block';
		document.getElementById('third_image').style.display = 'none';
		document.getElementById('option2').style.display = 'none';
			opt1.innerHTML = 'instappen';
			opt1.onclick = indeauto;
	
}
	else{ 
		alert('Als je wilt liften heb je iets nodig!');
		}
	}

function indeauto(event){
	console.log("indeauto");
	document.getElementById('level_title').innerHTML = 'Je zit nu in de auto!';
	document.getElementById('level_image').src = 'img/inauto.jpg';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('third_image').style.display = 'none';
	document.getElementById('sixth_image').style.display = 'none';
		opt1.innerHTML = 'Uitstappen?';
		opt1.onclick = uitdeauto;
}

function uitdeauto(event){
	console.log("uitdeauto");
	document.getElementById('level_title').innerHTML = 'Je bent nu vlak bij huis, heb je honger gekregen?';
	document.getElementById('level_image').src = 'img/carpool.jpg';
	document.getElementById('third_image').style.display = 'none';
	document.getElementById('fifth_image').style.display = 'inline-block';
	document.getElementById('option2').style.display = 'none';
	document.getElementById('sixth_image').style.display = 'none';
	document.getElementById('second_image').style.display = 'none';
		opt1.innerHTML = 'Verder naar huis?';
		opt1.onclick = thuis;

	document.getElementById('fifth_image').onclick = function(){	
		snack = true;
		document.getElementById('fifth_image').style.display = 'none';
	}
}

function thuis(event){
		if(snack == true){
			console.log("thuis");
			document.getElementById('level_image').src = 'img/bed.jpg';
			document.getElementById('level_title').innerHTML = 'Welkom thuis! Ga maar lekker slapen het is al laat!';
			document.getElementById('third_image').style.display = 'none';
			document.getElementById('seventh_image').style.display = 'inline-block';
			document.getElementById('option1').style.display = 'none';
			document.getElementById('sixth_image').style.display = 'none';
			document.getElementById('seventh_image').src = 'img/geslaagd.jpg';
			}
		else{
			alert('Eet je snack!');
		}
}

startlevel();
	// only allow option 2 if user has a key in his inventory




