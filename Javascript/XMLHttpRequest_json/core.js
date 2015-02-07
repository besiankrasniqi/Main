
/**
* Created by Besian Krasniqi on 02/07/14
* email: besian@bksofteng.com
* website: www.bksofteng.com
*/

//Retrieving a JSON file using pure JavaScript
var mainContainer = document.getElementById("main");

var oReq = new XMLHttpRequest();
oReq.open("get", "file1.json", true);
oReq.onload = showJSON;

oReq.send();

function showJSON () {
    console.log(this.responseText);
    var getFile = JSON.parse(this.responseText);
//    mainContainer.innerHTML = getFile.name;
    var result = "<ul>";

    for (var prop in getFile) {
        result += "<li>"  + prop + " : " + getFile[prop] + "</li>";
        mainContainer.innerHTML = result;
        console.log(result);
    }

}