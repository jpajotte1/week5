

document.getElementByID("convertFtoC").onclick = convertFtoC;

function convertFtoC(){
	var temp= document.getElementByID("inputFtoC").value;
	var newTemp = (temp - 32) * 5 / 9;
	document.getElementById("solutionFtoC").innerHTML = newTemp + "&deg; C";
}

document.getElementById("convertCtoF").onclick = convertCtoF;

function convertCtoF(){
	var tempF= document.getElementByID("inputCtoF").value;
	var newTempF = (tempF * 9 / 5) + 32;
	document.getElementById("solutionCtoF").innerHTML = newTempF + "&deg; F";
}
