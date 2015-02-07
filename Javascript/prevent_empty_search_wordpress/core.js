
var form1 = document.getElementById("form1");
var searchBtn = document.getElementById("search");
searchBtn.onclick = function(e) {
	e = event || window.event;
	if(form1["search-field"].value.length == 0){
	      if(event.preventDefault){
		  e.preventDefault();
		  //log your message to the user here, or don't log anything
	      }
	      else {
		  e.returnValue = false;
		  //log your message to the user here, or don't log anything
	      }
	}
};