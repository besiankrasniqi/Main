
window.onload = function() {
    setInterval(wNd1, 10);
}

var t_sitemnlink = document.getElementById("sitemnlink");

var set1 = 850;
var set2 = set1 + "px";

function wNd1() {
	
	var t_body = document.getElementsByTagName("body")[0].offsetWidth;
	if (t_body < 850){
		//alert("window size is less than 850px");
		t_sitemnlink.setAttribute("href", "style2.css");
	}
	
	else {
		if (t_body > 850){
			t_sitemnlink.setAttribute("href", "style.css");
		}
	}
}
