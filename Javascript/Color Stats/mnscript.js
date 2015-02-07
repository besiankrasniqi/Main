
var mn_div = document.getElementById("mndiv");

var pl = document.getElementById("placeholder");

var sq1 = document.getElementById("square1");
var sq2 = document.getElementById("square2");
var sq3 = document.getElementById("square3");
var sq4 = document.getElementById("square4");
var sq5 = document.getElementById("square5");
var sq6 = document.getElementById("square6");
var sq7 = document.getElementById("square7");
var sq8 = document.getElementById("square8");
var sq9 = document.getElementById("square9");

sq1.onclick = fnBef1;
sq2.onclick = fnBef2;
sq3.onclick = fnBef3;
sq4.onclick = fnBef4;
sq5.onclick = fnBef5;
sq6.onclick = fnBef6;
sq7.onclick = fnBef7;
sq8.onclick = fnBef8;
sq9.onclick = fnBef9;



//var two_nine = [sq1, sq3, sq4, sq4, sq5, sq6, sq7, sq8, sq9];

var t_t1 = document.getElementById("t1"); 
var t_t2 = document.getElementById("t2"); 
var t_t3 = document.getElementById("t3"); 
var t_t4 = document.getElementById("t4"); 
var t_t5 = document.getElementById("t5"); 
var t_t6 = document.getElementById("t6"); 
var t_t7 = document.getElementById("t7"); 
var t_t8 = document.getElementById("t8"); 
var t_t9 = document.getElementById("t9"); 
var t_t10 = document.getElementById("t10"); 

var res1 = 0;
var res2 = 0;
var res3 = 0;
var res4 = 0;
var res5 = 0;
var res6 = 0;
var res7 = 0;
var res8 = 0;
var res9 = 0;
var res10 = 0;

function fnBef1() {
   mn_div.insertBefore(this, pl.nextSibling);
   res1 = res1 + 1;
   t_t1.childNodes[0].nodeValue = res1;
   //total actions sum
   res10 = res10 + 1;
    t_t10.childNodes[0].nodeValue = res10;
}

function fnBef2() {
   mn_div.insertBefore(this, pl.nextSibling);
   res2 = res2 + 1;
   t_t2.childNodes[0].nodeValue = res2;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef3() {
   mn_div.insertBefore(this, pl.nextSibling);
   res3 = res3 + 1;
   t_t3.childNodes[0].nodeValue = res3;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef4() {
   mn_div.insertBefore(this, pl.nextSibling);
   res4 = res4 + 1;
   t_t4.childNodes[0].nodeValue = res4;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef5() {
   mn_div.insertBefore(this, pl.nextSibling);
   res5 = res5 + 1;
   t_t5.childNodes[0].nodeValue = res5;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef6() {
   mn_div.insertBefore(this, pl.nextSibling);
   res6 = res6 + 1;
   t_t6.childNodes[0].nodeValue = res6;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef7() {
   mn_div.insertBefore(this, pl.nextSibling);
   res7 = res7 + 1;
   t_t7.childNodes[0].nodeValue = res7;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef8() {
   mn_div.insertBefore(this, pl.nextSibling);
   res8 = res8 + 1;
   t_t8.childNodes[0].nodeValue = res8;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}

function fnBef9() {
   mn_div.insertBefore(this, pl.nextSibling);
   res9 = res9 + 1;
   t_t9.childNodes[0].nodeValue = res9;
   //total actions sum
   res10 = res10 + 1;
   t_t10.childNodes[0].nodeValue = res10;
}



