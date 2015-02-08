/**
* Created by Besian Krasniqi on 02/07/14
* email: besian@bksofteng.com
* website: www.bksofteng.com
*/

//Retrieving a json file using pure JavaScript
var mainContainer = document.getElementById("main");
var url = "content.html";

var oReq = new XMLHttpRequest();
oReq.open("get", url, true);
oReq.onload = showJson;
oReq.send();

function showJson() { 
	if (oReq.readyState == 4 ) {
		if (oReq.status >= 200 || oReq.staus <= 300 || oReq.status == 304) {
			var getFile = oReq.responseText; 
			mainContainer.innerHTML = getFile;
		}
	}
	else {
		mainContainer.innerHTML = "The file " + url + " could not be loaded";
	}
} 

