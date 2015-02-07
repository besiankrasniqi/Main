

var xhbutton = document.getElementById("xhbutton"), 
	shbutton = document.getElementById("shbutton"),
	robutton = document.getElementById("robutton"),
	mkbutton = document.getElementById("mkbutton"),
	ajbutton = document.getElementById("ajbutton"),
	votetotal = document.getElementById("votetotal");

var xhresult = document.getElementById("xhresult"),
	shresult = document.getElementById("shresult"),
	roresult = document.getElementById("roresult"),
	mkresult = document.getElementById("mkresult"),
	ajresult = document.getElementById("ajresult");

var xhpercent = document.getElementById("xhpercent"),
	shpercent = document.getElementById("shpercent"),
	ropercent = document.getElementById("ropercent"),
	mkpercent = document.getElementById("mkpercent"),
	ajpercent = document.getElementById("ajpercent");

var allcount = 0,
	xhcount = 0,
	shcount = 0,
	rocount = 0,
	mkcount = 0,
	ajcount = 0;

xhbutton.onclick = xhfunction;
shbutton.onclick = shfunction;
robutton.onclick = rofunction;
mkbutton.onclick = mkfunction;
ajbutton.onclick = ajfunction;

function xhfunction (){ 
	xhcount = xhcount + 1;
	allcount = allcount + 1;
	xhresult.firstChild.nodeValue = xhcount + " votes";
	percentChange();
}

function shfunction (){
	shcount = shcount + 1;
	allcount = allcount + 1;
	shresult.firstChild.nodeValue = shcount;
	percentChange();
}

function rofunction (){
	rocount = rocount + 1;
	allcount = allcount + 1;
	roresult.firstChild.nodeValue = rocount;
	percentChange();
}

function mkfunction (){
	mkcount = mkcount + 1;
	allcount = allcount + 1;
	mkresult.firstChild.nodeValue = mkcount;
	percentChange();
}

function ajfunction (){
	ajcount = ajcount + 1;
	allcount = allcount + 1;
	ajresult.firstChild.nodeValue = ajcount;
	percentChange();
}

function percentChange() {
    xhpercent.firstChild.nodeValue = Math.round(((xhcount * 100) / allcount)) + " %";
    shpercent.firstChild.nodeValue = Math.round(((shcount * 100) / allcount)) + " %";
    ropercent.firstChild.nodeValue = Math.round(((rocount * 100) / allcount)) + " %";
    mkpercent.firstChild.nodeValue = Math.round(((mkcount * 100) / allcount)) + " %";
    ajpercent.firstChild.nodeValue = Math.round(((ajcount * 100) / allcount)) + " %";
    votetotal.firstChild.nodeValue = allcount + " votes";
}

