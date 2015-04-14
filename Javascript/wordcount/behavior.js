/**
 * Created by Besian Krasniqi on 04/13/15
 * email: besian@bksofteng.com
 * website: www.bksofteng.com
 */

var wordsCount = {
    CalculateBtn : document.getElementById("calculate"),
    areaTxt : document.getElementById("area-txt"),
    customWordCountField : document.getElementById("custom-word-count"),
    characterCount : document.getElementById("character-count"),
    outputAll : document.getElementById("output-all"),
    customWordField : document.getElementById("custom-word-field"),
    isEmtpy : function isFieldEmpty() {
        var textField = this.areaTxt.value;
        var textEmpty = textField.length == 0 ? true : false;
        return textEmpty;
    },
    initVals : function initValues(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r,
               s, t, u, v, x, y, z, one, two, three, four, five, six, seven, eight, nine) {
        return {
            _letterAcount : a,
            _letterBcount : b,
            _letterCcount : c,
            _letterDcount : d,
            _letterEcount : e,
            _letterFcount : f,
            _letterGcount : g,
            _letterHcount : h,
            _letterIcount : i,
            _letterJcount : j,
            _letterKcount : k,
            _letterLcount : l,
            _letterMcount : m,
            _letterNcount : n,
            _letterOcount : o,
            _letterPcount : p,
            _letterQcount : q,
            _letterRcount : r,
            _letterScount : s,
            _letterTcount : t,
            _letterUcount : u,
            _letterVcount : v,
            _letterXcount : x,
            _letterYcount : y,
            _letterZcount : z,
            _numberOne : one,
            _numberTwo : two,
            _numberThree : three,
            _numberFour : four,
            _numberFive : five,
            _numberSix : six,
            _numberSeven : seven,
            _numberEight : eight,
            _numberNine : nine,
            _custW : wordsCount.customWordField.value
        }
    },

    calcWords : function() {
        var origText = this.areaTxt.value;
        var theText = this.areaTxt.value;
        theText = theText.replace(/(^\s*)|(\s*$)/gi,"");
        theText = theText.replace(/[ ]{2,}/gi," ");
        theText = theText.replace(/\n /,"\n");

        var allVals = wordsCount.initVals("a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
              "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z", 1,
              2, 3, 4, 5, 6, 7, 8, 9);

        console.log(allVals);

        console.log(wordsCount.customWordField.value);

        var result = "";
        result += '<strong>Word count: </strong>' + theText.split(" ").length + '</br>';
        result += '<strong>Character count (including spaces): </strong>' + this.areaTxt.value.length + '</br>';

        for ( var p in allVals ) {
            var pVals = allVals[p];
            var _rG = new RegExp(pVals, "g");

            if ( origText.match(_rG) !== null ) {
                if (allVals.hasOwnProperty(p) ) {
                    p = theText.match(_rG).length;
                }
                if (pVals.length == 0) {
                    pVals = "no custom word";
                }
                else {
                    result += '<strong> "' + pVals + '" count: </strong>' + p + '</br>';
                }
            }
            else {
                if (allVals.hasOwnProperty(p) ) {
                    p = 0;
                }
            }
        }
        wordsCount.outputAll.style.display = "block";
        wordsCount.outputAll.innerHTML = result;
    }
};

wordsCount.CalculateBtn.addEventListener("click", function() {
    if(!wordsCount.isEmtpy()) {
        wordsCount.calcWords();
    } else {
        console.log("No text was entered");
    }
}, false);

