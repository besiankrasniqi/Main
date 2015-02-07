/* Author: Besian Krasniqi
*  email: bksoftengineer@gmail.com
*  website: bksofteng.com 
*/

var scdiv_ = document.getElementById("scdiv");

window.onscroll = displaySc;

scdiv_.onmouseover = function(){
	scdiv_.style.height="500px";
};

scdiv_.onmouseout = function(){
	scdiv_.style.height="250px";
};

function displaySc(){
	scdiv_.style.display="block";
	var vscrollpos = window.pageYOffset;
	scdiv_.style.overflow="auto";
	
	if (window.pageYOffset == 0){
		scdiv_.style.display="none";
	}
}
