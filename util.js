var __r_elem;
var all_loaded;

let pages = [
	"0.1", "Algebra.html",
	"0.2", "Algebra2.html",
	"0.3", "Algebra3.html",
	"1.1", "Volume.html",
	"1.2", "Volume2.html",
	"1.3", "Volume3.html",
	"1.4", "../01variables/04.html",
	"1.5", "../01variables/05.html",
	"1.6", "../01variables/06.html",
	"2.1", "Area.html",
	"2.2", "Area2.html",
	"2.3", "Area3.html",
	"2.4", "../02arrays/04.html",
	"3.1", "../03objects/01.html",
	"3.2", "../03objects/02.html",
	"3.3", "../03objects/03.html",
	"3.4", "../03objects/04.html",
	"4.1", "../04control/01.html",
	"4.2", "../04control/02.html",
	"4.3", "../04control/03.html",
	"4.4", "../04control/04.html",
	"4.5", "../04control/05.html",
	"4.6", "../04control/06.html",
	"4.7", "../04control/07.html",
	"4.8", "../04control/08.html",
	"4.9", "../04control/09.html",
	"4.10", "../04control/10.html",
	"5.1", "../05functions/01.html",
	"5.2", "../05functions/02.html",
	"5.3", "../05functions/03.html",
];

async function includeHTML() {
	var z, i, elmnt, file, xhttp;
	/* Loop through a collection of all HTML elements: */
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
	  elmnt = z[i];
	  /*search for elements with a certain atrribute:*/
	  file = elmnt.getAttribute("include-html");
	  if (file) {
		 /* Make an HTTP request using the attribute value as the file name: */
		 xhttp = new XMLHttpRequest();
		 xhttp.onreadystatechange = function() {
			if (this.readyState == 4) {
			  if (this.status == 200) {elmnt.innerHTML = this.responseText;}
			  if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
			  /* Remove the attribute, and call this function once more: */
			  elmnt.removeAttribute("include-html");
			  includeHTML();
			}
		 } 
		 xhttp.open("GET", file, true);
		 xhttp.send();
		 /* Exit the function: */
		 return;
	  }
	}
 }


function getUserCode () {
	 return document.getElementById("yourcode").value;
}

function clearMessages () {
	if (!__r_elem) {
		__r_elem = document.getElementById("results"); }
	
	__r_elem.innerHTML="";
}

function warn (m) {
	if (!__r_elem) {
		__r_elem = document.getElementById("results"); }

	div.className = "warn";
	div.innerHTML = m;
	__r_elem .appendChild (div);
}

function goodIf (t, m) {
	if (!__r_elem) {
		__r_elem = document.getElementById("results"); }

	if (t === false) return 0;

	let div = document.createElement('div');
	div.className = "good";
	div.innerHTML = m;
	__r_elem .appendChild (div);
	return 100;
}

function badIf (t, m) {
	if (!__r_elem) {
		__r_elem = document.getElementById("results"); }

	if (t === false) return 0;
	let div = document.createElement('div');
	div.className = "bad";
	div.innerHTML = m;
	__r_elem .appendChild (div);
	return -10;
}

function test (code, assertion) {
	let r;
	if (assertion) r = eval (code + ";\n" + assertion);
	else r = eval (code);
	console.log(r);
	return r;
}

function setCode (str) {
	document.getElementById("yourcode").value = str;
}

function waitForAllIncluded(thendo){
	if(document.getElementById("yourcode") !== null){
		 thendo();
	}
	else{
		 setTimeout(function() { waitForAllIncluded (thendo) }, 250);
	}
}

function goPrevious() {
	let ex = document.body.getAttribute("data-ex");
	let i = pages .indexOf(ex);

	if (i == 0) {
		location.replace ("../index.html");
	}
	else {
		location.replace (pages[i - 1]);
	}
}

function goNext () {
	let ex = document.body.getAttribute("data-ex");
	let i = pages .indexOf(ex);

	if (i == pages.length - 2) {
		location.replace ("../index.html");
	}
	else {
		location.replace (pages[i + 3]);
	}
}