
var pointer1_ = document.getElementById("pointer1");
var mlist_ = document.getElementById("mlist");
var mndiv_ = document.getElementById("mndiv");

var pointer1_left = pointer1_.offsetLeft;
var pointer1_top = pointer1_.offsetTop;

var pointer1_leftcalc = pointer1_left + 10 + "px";
var pointer1_topcalc =  pointer1_top + 5 + "px";

pointer1_.onmouseover = displayList;
pointer1_.onmouseout = function() {
    mlist_.style.display="none";
};

function displayList(){
    var pointer1_left = pointer1_.offsetLeft;
    var pointer1_top = pointer1_.offsetTop;
    var pointer1_leftcalc = pointer1_left + 10 + "px";
    var pointer1_topcalc =  pointer1_top + 5 + "px";
    mlist_.style.left = pointer1_leftcalc;
    mlist_.style.top = pointer1_topcalc;
    mlist_.style.display="block";
    
}
