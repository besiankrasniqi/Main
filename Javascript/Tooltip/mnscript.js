

//declaring variables
var t_bn1 = document.getElementById("bn1"),
	t_bn2 = document.getElementById("bn2"),
	t_one = document.getElementById("one"),
	t_link1 = document.getElementById("link1"),
	t_tooltip1 = document.getElementById("tooltip1")
	test1 = "10";


t_bn1.onclick = chngW2;

t_bn2.onclick = function() {
	fnAct1(30, 42, 29 );
}

t_link1.onmouseover = showTooltip;
t_link1.onmouseout = hideTooltip;

var t_link1_top = t_link1.offsetTop;
var t_link1_left = t_link1.offsetLeft;

var t_link1_top_ = t_link1_top + 13 + "px";
var t_link1_left_ = t_link1_left + "px";

function chngW2 () {
	
	if (t_one.offsetWidth == 650){
		t_one.style.width = "850px";
	}
	
	else if (t_one.offsetWidth = 870){
		t_one.style.width = "630px";
	}
}

function showTooltip() {
	t_tooltip1.style.top = t_link1_top_;
	t_tooltip1.style.left = t_link1_left_;
	t_tooltip1.style.display = "block";
}

function hideTooltip() {
	t_tooltip1.style.top = t_link1_top_;
	t_tooltip1.style.left = t_link1_left_;
	t_tooltip1.style.display = "none";
}

function fnAct1(num1, num2, num3) {
	if ((num1 > num2) && (num1 > num3)){
		alert("The greatest number is: " + num1);
	}

	else if ((num2 > num1) && (num2 > num3)){
		alert("The greatest number is: " + num2);
	}
	
	else if ((num3 > num1) && (num3 > num2)){
		alert("The greatest number is: " + num3);
	}	
}