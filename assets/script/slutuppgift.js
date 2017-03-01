window.onload = rate();
window.onload = listener();

var iconSave1, iconSave2, iconSave1, iconSave4, iconSave5;
var filled = false;
function rate(){
	var JSONrate, xhttp, rating, stars, cssId, i;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if(this.readyState == 4 && this.status === 200){
			JSONrate = JSON.parse(this.responseText);
			document.getElementById("voting").innerHTML = " Rankning: " + Math.floor(JSONrate.rating *100)/100 + " (" + JSONrate.votes + " röster)";			
			rating = JSONrate.rating; stars = 5; cssId;
			for (i = 1; i <= stars; i++) {
				cssId = "icon" + i;
				if (i <= Math.round(rating)) {
					document.getElementById(cssId).innerHTML = "&starf;";
				} else {
					document.getElementById(cssId).innerHTML = "&star;";
				}
				cssId = "";		
			}
		}
	}
	xhttp.open("GET", "https://edu.oscarb.se/sjk15/api/recipe/?api_key=12610292d949d8f6&recipe=biskvi", true);
	xhttp.send();
}
function listener(){
	var i;
	iconListeners = document.getElementsByClassName("icon");

	for (i = 0; i < iconListeners.length; i++) {
		iconListeners[i].addEventListener("mouseover", mouseOver);
		iconListeners[i].addEventListener("click", clicked);
		iconListeners[i].addEventListener("mouseout", mouseOut);
	}
}

function clicked() {
	if (!filled) {
		var voted;
		if (this == document.getElementById("icon1")){
			voted = 1;
		} else if (this == document.getElementById("icon2")){			
			voted = 2;
		} else if (this == document.getElementById("icon3")){
			voted = 3;
		}else if (this == document.getElementById("icon4")){
			voted = 4;
		}else if (this == document.getElementById("icon5")){
			voted = 5;
		}

		filled = true;
		vote(voted);
	}
}

function vote(voted){
	var vote, voteURL, xhttp;	
		vote = voted;
		voteURL = "https://edu.oscarb.se/sjk15/api/recipe/?api_key=12610292d949d8f6&recipe=biskvi&rating=" + vote;
		xhttp = new XMLHttpRequest();		
	    xhttp.onreadystatechange = function() {
	    if(this.readyState == 4 && this.status === 200){
			reset();
			rate();
	    	}
	   	}
		xhttp.open("GET", voteURL, true);
		xhttp.send();	
}

function reset(){
	var string, i;
	
	string = "";
	for (i = 1; i <= 5; i++) {
		string = "icon" + i;
		document.getElementById(string).innerHTML = "";	
	}
	string = "";
}

function mouseOver() {
	var fill, i, buildString;

	if (!filled) {
	iconSave1 = document.getElementById("icon1").innerHTML;iconSave2 = document.getElementById("icon2").innerHTML;
	iconSave3 = document.getElementById("icon3").innerHTML;iconSave4 = document.getElementById("icon4").innerHTML;
	iconSave5 = document.getElementById("icon5").innerHTML;

		if (this == document.getElementById("icon1")){
			fill = 1;
		} else if (this == document.getElementById("icon2")){
			fill = 2;
		} else if (this == document.getElementById("icon3")){
			fill = 3;
		}else if (this == document.getElementById("icon4")){
			fill = 4;
		}else if (this == document.getElementById("icon5")){
			fill = 5;
		}

		buildString = "";
		for (i = 1; i <= 5; i++) {
			buildString = "icon" + i;
			if (i <= fill){
				document.getElementById(buildString).innerHTML = "&starf;";
			} else {
				document.getElementById(buildString).innerHTML = "&star;";
			}	
		}
	}	
}

function mouseOut() {
	if (!filled) {
		document.getElementById("icon1").innerHTML = iconSave1;
		document.getElementById("icon2").innerHTML = iconSave2;
		document.getElementById("icon3").innerHTML = iconSave3;
		document.getElementById("icon4").innerHTML = iconSave4;
		document.getElementById("icon5").innerHTML = iconSave5; 
	}	
}