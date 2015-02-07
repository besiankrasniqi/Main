
var mnWrapper = document.getElementById("wrapper"),
    mTarget = document.getElementById("mtarget"),
    enteredName = document.getElementById("enteredname"),
    submitname = document.getElementById("submitname"),
    nameT = document.getElementById("name"),
    overlaydiv = document.getElementById("overlaydiv"),
    overlaydivbox = document.getElementById("overlaydivbox"),
    nameEmpty = document.getElementById("name-empty")
;

var counter = 0;

setInterval(randomMove, 1200);
submitname.addEventListener("click", setName);

function setName() {
    console.log(nameT);
    nameT.textContent = enteredName.value;
    console.log(nameT);
    console.log(enteredName.value);

    if (!enteredName.value || enteredName.value == " "){
        nameEmpty.style.display = "block";
    }
    else {
        overlaydiv.style.display = "none";
        overlaydivbox.style.display = "none";
    }
}

function randomMove() {
    var numRandom = Math.floor(Math.random() * 400) + 0;
    var numRandom2 =  Math.floor(Math.random() * 400) + 0;
    mTarget.style.top = numRandom + "px";
    mtarget.style.left = numRandom2 + "px";
    mTarget.style.backgroundImage = "url(dinosaur.jpg)";
}

mTarget.addEventListener("click", addScore);



function addScore() {
    var score = document.getElementById("score");
    counter += 1;
    score.textContent = counter;
    mTarget.style.backgroundImage = "url(dinosaur_p.jpg)";
}

var something = "game works";

