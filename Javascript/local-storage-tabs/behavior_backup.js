
var mainTabs = {
	_home : document.getElementById("home"),
	_aboutUs : document.getElementById("about-us"),
	_services : document.getElementById("services"),
	_contactUs : document.getElementById("contact-us")
};

lclStrValues = {
	_homeCurrent : "home_tab",
	_aboutUsCurrent : "about_us_tab",
	_servicesCurrent : "services_tab",
	_contactUsCurrent : "contact_us_tab"
}

function setLocal(tab, value ) {
	if (  localStorage.getItem("tab") != value ) {
		localStorage.setItem("tab", value);
	}
}

function checkLocal(e) {
	switch(  localStorage.getItem("tab") ) {
		case lclStrValues._homeCurrent:
		mainTabs._home.style.backgroundColor = "#598A11"
		break;
		case lclStrValues._aboutUsCurrent:
		mainTabs._aboutUs.style.backgroundColor = "#598A11"
		break;
		case lclStrValues._servicesCurrent:
		mainTabs._services.style.backgroundColor = "#598A11"
		break;		
		case lclStrValues._contactUsCurrent:
		mainTabs._contactUs.style.backgroundColor = "#598A11"
		break;		
	}
}

mainTabs._home.addEventListener("click", function() {
		setLocal(this, lclStrValues._homeCurrent);

}, false);

mainTabs._aboutUs.addEventListener("click", function() {
		setLocal(this, lclStrValues._aboutUsCurrent);

}, false);

mainTabs._services.addEventListener("click", function() {
		setLocal(this, lclStrValues._servicesCurrent);

}, false);

mainTabs._contactUs.addEventListener("click", function() {
		setLocal(this, lclStrValues._contactUsCurrent);

}, false);


window.addEventListener("DOMContentLoaded", function() {
	checkLocal();

	console.log("Current selected tab is: " + localStorage.getItem("tab") );

}, false);

