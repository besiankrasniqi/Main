/**
 * Created by besiankrasniqi on 9/20/14.
 */
var boxes = $(".some");
var maxHeight = 0;
function setHeight() {
    for (var i=0; i<boxes.length; i++){
        if ($(boxes[i]).height() > maxHeight) {
            maxHeight = $(boxes[i]).height();
        }
    }
    boxes.height(maxHeight);
}

$(document).ready(function() {
    setHeight();
});

$(window).resize(function() {
    boxes.height(10); //setting a minimum height knowing height of boxes cant be less than this
    maxHeight = 10; //reseting max height
    for (var i=0; i<boxes.length; i++){
        $(boxes[i]).removeAttr("style"); //removing the inline style means removing the height of the boxes as well
    }
    boxes.css("overflow", "hidden"); //so that text can set the height of the box
    setHeight();
});

