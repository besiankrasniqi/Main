/**
 * Created by besiankrasniqi on 7/9/14.
 * Event Delegation example
 */


var mnElem = document.getElementById("mainwrapper");

mnElem.addEventListener("click", fnShows);

function fnShows (e) {
    if(e.target.id == "elem1") {
        alert("you have clicked on Element1");
    }

    else if(e.target.id == "elem2") {
        alert("you have clicked on Element2");
    }

    else if(e.target.id == "elem3") {
        alert(event.target.id);
    }

}


