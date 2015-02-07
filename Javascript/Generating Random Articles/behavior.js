
/* Author: Besian Krasniqi
*  email: bksoftengineer@gmail.com
*  website: bksofteng.com 
*/

var Besian = {
    button_1 : document.getElementById("b1"),
    divsArr : [],
    a : [],

    generateVariables : function (){
        var _1 = "n" + Math.floor((Math.random() * 20) + 1);
       		_2 = "n" + Math.floor((Math.random() * 20) + 1);
        	_3 = "n" + Math.floor((Math.random() * 20) + 1);
        	_4 = "n" + Math.floor((Math.random() * 20) + 1);
        	_5 = "n" + Math.floor((Math.random() * 20) + 1);
        	_6 = "n" + Math.floor((Math.random() * 20) + 1);
        	_7 = "n" + Math.floor((Math.random() * 20) + 1);
        	_8 = "n" + Math.floor((Math.random() * 20) + 1);
        	_9 = "n" + Math.floor((Math.random() * 20) + 1);
        	_10 = "n" + Math.floor((Math.random() * 20) + 1);
        	_11 = "n" + Math.floor((Math.random() * 20) + 1);
        	_12 = "n" + Math.floor((Math.random() * 20) + 1);

        var div1="", div2="", div3="", div4="", div5="", div6="", div7="", div8="", div9="", div10="", div11="", div12="";
        divsArr = [div1, div2, div3, div4, div5, div6, div7, div8, div9, div10, div11, div12];
        a = [_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12];

        for (var i=0; i< a.length; i++) {
            (divsArr[i]) = document.getElementById(a[i]);
        }

        for (var j=0; j< divsArr.length; j++){
            divsArr[j].style.display="none";
        }
    },

    generateRandomDivs : function (){
        Besian.generateVariables();
        for (var k=0; k< divsArr.length; k++){
            divsArr[k].style.display="block";
        }
    }
}

window.onload = function(){
    Besian.generateRandomDivs();
};

Besian.button_1.onclick = function(){
    window.location.reload();
};
