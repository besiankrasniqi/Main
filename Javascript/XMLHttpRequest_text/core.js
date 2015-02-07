/**
* Created by Besian Krasniqi on 02/07/14
* email: besian@bksofteng.com
* website: www.bksofteng.com
*/

//Retrieving a text file using pure JavaScript
var mainContainer = document.getElementById("main");

var jReq = new XMLHttpRequest();
jReq.open("get", "file1.txt", true);
jReq.onload = showJson;
jReq.send();

function showJson() {
    var recReq = jReq.responseText;
    var output = "<ul>";

    for (var prop in recReq) {
        output += "<li>" + prop + " : " + recReq[prop] + "</li>";
    }
    output += "</ul>";
    mainContainer.innerHTML = recReq;
}