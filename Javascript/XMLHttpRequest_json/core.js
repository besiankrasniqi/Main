
/**
* Created by Besian Krasniqi on 02/07/14
* email: besian@bksofteng.com
* website: www.bksofteng.com
*/

//Retrieving a JSON file using pure JavaScript
var mainContainer = document.getElementById("main");
var url = "file1.json";

var oReq = new XMLHttpRequest();
oReq.open("get", url, true);
oReq.onload = showJSON;

oReq.send();

function showJSON () {
    console.log(this.responseText);
    var getFile = JSON.parse(this.responseText);
    var result = "<ul>";

	if (oReq.readyState == 4 ) {
		if (oReq.status >= 200 || oReq.staus <= 300 || oReq.status == 304) {
		    for (var prop in getFile) {
		        result += "<li>"  + prop + " : " + getFile[prop] + "</li>";
		        mainContainer.innerHTML = result;
		        console.log(result);
		    }
		}
	}
	else {
		mainContainer.innerHTML = "The file " + url + " could not be loaded";
	}
}