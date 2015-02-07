
/*Author: Besian Krasniqi
*email: bksofteng@gmail.com
*
*This script takes care of three operations:
* 1. Adds a new class while retaining an existing class
* 2. Removes the existing class and adds a new class
* 3. Toggles a class
*
* Please note that the ID of the element needs to be provided in order to use the three functions below
* */

var b1_el = document.getElementById("b1");

b1_el.addEventListener("click", function() {
    //addClass("one", "green");
    toggleClass("one", "blue", "green");
    toggleClass("two", "grey", "orange");
    toggleClass("three", "red", "yellow");
    //changeClass("one", "green");
    //document.getElementById("one").removeAttribute("class");
});

//Adds a new class while retaining an existing class
function addClass(elementid, newClass) {
    var elem = document.getElementById(elementid);
    var currentClass = elem.getAttribute("class");
    elem.setAttribute("class", currentClass + " " + newClass);
}

//Removes the existing class and adds a new class
function changeClass(elementid, newClass){
    var elem = document.getElementById(elementid);
    elem.setAttribute("class", newClass);
}

//Toggles a class
function toggleClass(elementid, currentClass, newClass) {
    var elem = document.getElementById(elementid);
    var getClass = elem.getAttribute("class");
    if(getClass == newClass)
        elem.setAttribute("class", currentClass);
    else
        elem.setAttribute("class", newClass);
}

