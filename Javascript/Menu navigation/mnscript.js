
var taboutus = document.getElementById("aboutus");
var tlistabout = document.getElementById("listabout");

var t_services = document.getElementById("services");
var t_listservices = document.getElementById("listservices");


taboutus.onmouseover = fnShowAboutus; 
taboutus.onmouseout = fnHideAboutus; 
tlistabout.onmouseover = fnShowAboutus;
tlistabout.onmouseout = fnHideAboutus;

t_services.onmouseover = fnShowServices;
t_services.onmouseout = fnHideServices;


function fnShowAboutus() {
	var posLa = taboutus.offsetLeft;
	var posTa = taboutus.offsetTop;
	var posLpa = posLa + 0 + "px";
	var posTpa = posTa + 35 + "px";
	tlistabout.style.display="block";
	tlistabout.style.left = posLpa;
	tlistabout.style.top = posTpa;
}


function fnHideAboutus() {
	tlistabout.style.display="none";
}


function fnShowServices() {
	var posLs = t_services.offsetLeft;
	var posTs = t_services.offsetTop;
	var posLps = posLs + 0 + "px";
	var posTps= posTs + 35 + "px";
	t_listservices.style.display="block";
	t_listservices.style.left = posLps;
	t_listservices.style.top = posTps;
}

function fnHideServices() {
	t_listservices.style.display="none";
}


// expanding About us Menu
var t_butexpand = document.getElementById("butexpand");
var t_original = document.getElementById("butoriginal");
var t_listaboutinner = document.getElementById("listaboutinner");
var t_listaboutdivs = t_listaboutinner.getElementsByTagName("div");

t_butexpand.onclick = fnExpandAbout;
t_original.onclick = fnOriginalAbout;

function fnExpandAbout() {
	tlistabout.style.width="350px";
	t_listaboutdivs[0].style.width="330px";
	t_listaboutdivs[1].style.width="330px";
	t_listaboutdivs[2].style.width="330px";
	t_listaboutdivs[3].style.width="330px";
}

function fnOriginalAbout() {
	tlistabout.style.width="250px";
	t_listaboutdivs[0].style.width="230px";
	t_listaboutdivs[1].style.width="230px";
	t_listaboutdivs[2].style.width="230px";
	t_listaboutdivs[3].style.width="230px";
}

