
window.onload = function() {
    setInterval(fnSlide, 6000);
};


var smnphoto = document.getElementById("mnphoto");
var imgset = Array("p1.jpg", "p2.jpg", "p3.jpg", "p4.jpg", "p5.jpg");
var imgcaption = ["Photo 1", "Photo 1", "Photo 2", "Photo 3", "Photo 4", "Photo 5"];

//getting description of each photo
var sdescription = document.getElementById("description");

var sbutton1 = document.getElementById("button1");
var sbutton2 = document.getElementById("button2");
var sbutton3 = document.getElementById("button3");
var sbutton4 = document.getElementById("button4");
var sbutton5 = document.getElementById("button5");
var sbprevious = document.getElementById("bprevious");
var sbnext = document.getElementById("bnext");

sbutton1.onclick = photoSelf;
sbutton2.onclick = photoSelf;
sbutton3.onclick = photoSelf;
sbutton4.onclick = photoSelf;
sbutton5.onclick = photoSelf;
sbnext.onclick = photoNext;
sbprevious.onclick = photoPrevious;

function photoSelf() {
	smnphoto.setAttribute("src", this.getAttribute("href"));
	sdescription.childNodes[0].nodeValue = this.getAttribute("title");
}

//functions 
var imgcount = 0;

function fnSlide() {
	smnphoto.setAttribute("src", imgset[imgcount]);
	imgcount++;	

	sdescription.childNodes[0].nodeValue = imgcaption[imgcount];
	
	if (imgcount >= imgset.length){
		imgcount = 0;
	}
}

function photoNext() {
	var existsrc = smnphoto.getAttribute("src");
	
	if (existsrc == imgset[0]){
		smnphoto.setAttribute("src", imgset[1]);
		sdescription.childNodes[0].nodeValue = imgcaption[2];
	}
	
	if (existsrc ==imgset[1]){
	smnphoto.setAttribute("src", imgset[2]);
	sdescription.childNodes[0].nodeValue = imgcaption[3];
	}
	
	if (existsrc == imgset[2]){
		smnphoto.setAttribute("src", imgset[3]);
		sdescription.childNodes[0].nodeValue = imgcaption[4];
	}
	
	if (existsrc == imgset[3]){
		smnphoto.setAttribute("src", imgset[4]);
		sdescription.childNodes[0].nodeValue = imgcaption[5];
	}
	
	if (existsrc == imgset[4]){
		smnphoto.setAttribute("src", imgset[0]);
		sdescription.childNodes[0].nodeValue = imgcaption[1];
	}
		
}

function photoPrevious() {
	
	var existsrc = smnphoto.getAttribute("src");

	if (existsrc == imgset[0]){
		smnphoto.setAttribute("src", imgset[4]);
		sdescription.childNodes[0].nodeValue = imgcaption[5];
	}
	
	if (existsrc == imgset[1]){
	smnphoto.setAttribute("src", imgset[0]);
	sdescription.childNodes[0].nodeValue = imgcaption[1];
	}
	
	if (existsrc == imgset[2]){
		smnphoto.setAttribute("src", imgset[1]);
		sdescription.childNodes[0].nodeValue = imgcaption[2];
	}
	
	if (existsrc == imgset[3]){
		smnphoto.setAttribute("src", imgset[2]);
		sdescription.childNodes[0].nodeValue = imgcaption[3];
	}
	
	if (existsrc == imgset[4]){
		smnphoto.setAttribute("src", imgset[3]);
		sdescription.childNodes[0].nodeValue = imgcaption[4];
	}
		
}

