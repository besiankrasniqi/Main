/**
* Created by Besian Krasniqi on 02/28/15
* email: besian@bksofteng.com
* website: www.bksofteng.com
*/

/*
* An Example of using Local Storage to highlight the 
* link/tab of the current page. 
*/


var mainTabs = {
	_home : document.getElementById("home"),
	_aboutUs : document.getElementById("about-us"),
	_services : document.getElementById("services"),
	_contactUs : document.getElementById("contact-us"), 
	lclStrValues : {
		_homeCurrent : "home_tab",
		_aboutUsCurrent : "about_us_tab",
		_servicesCurrent : "services_tab",
		_contactUsCurrent : "contact_us_tab"
	}, 
	setLocal : function (tab, value ) {
		if (  localStorage.getItem("tab") != value ) {
			localStorage.setItem("tab", value);
		}
	}, 
	checkLocal : function (e) {
		switch(  localStorage.getItem("tab") ) {
			case mainTabs.lclStrValues._homeCurrent:
				mainTabs._home.style.backgroundColor = "#598A11";
			break;
			case mainTabs.lclStrValues._aboutUsCurrent:
				mainTabs._aboutUs.style.backgroundColor = "#598A11";
			break;
			case mainTabs.lclStrValues._servicesCurrent:
				mainTabs._services.style.backgroundColor = "#598A11";
			break;		
			case mainTabs.lclStrValues._contactUsCurrent:
				mainTabs._contactUs.style.backgroundColor = "#598A11";
			break;		
		}
	}
};

mainTabs._home.addEventListener("click", function() {
		mainTabs.setLocal(this, mainTabs.lclStrValues._homeCurrent);

}, false);

mainTabs._aboutUs.addEventListener("click", function() {
		mainTabs.setLocal(this, mainTabs.lclStrValues._aboutUsCurrent);

}, false);

mainTabs._services.addEventListener("click", function() {
		mainTabs.setLocal(this, mainTabs.lclStrValues._servicesCurrent);

}, false);

mainTabs._contactUs.addEventListener("click", function() {
		mainTabs.setLocal(this, mainTabs.lclStrValues._contactUsCurrent);

}, false);


window.addEventListener("DOMContentLoaded", function() {
	mainTabs.checkLocal();
	console.log("Current selected tab is: " + localStorage.getItem("tab") );

}, false);

