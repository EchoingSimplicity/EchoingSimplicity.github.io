
/* the < fieldset > element provides a grouping for a part of an HTML form, 
with a nested < legend > element providing a caption for the<fieldset>.
It takes few attributes, the most notable of which are form, 
which can contain the id of a < form > on the same page, allowing you to 
make the < fieldset > part of that < form > even if it is not nested inside it, 
and disabled, which allows you to disable the < fieldset > and all its contents in one go.
https://developer.mozilla.org/en-us/docs/web/html/element/fieldset
*/
let username = document.getElementById("username");
let password = document.getElementById("password");
let city = document.getElementById("city");
let state = document.getElementById("state");
let username1 = document.getElementById("username1");
let password1 = document.getElementById("password1");

let cat = document.getElementById("cat");
let catConfused = document.getElementById("catConfused");
let ground = document.getElementById("ground");
let catFirst = document.getElementById("cat1");
let catSecond = document.getElementById("cat2");
let catState = 1;
let shouldRunCatMove = true;

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("fieldset2").disabled = true;
    document.getElementById("fieldset3").disabled = true;
})

function newUser() {
    cycleCat(2);
    document.getElementById("fieldset2").disabled = false;
    document.getElementById("fieldset3").disabled = true;
}

function oldUser() {
    cycleCat(2);
    document.getElementById("fieldset3").disabled = false;
    document.getElementById("fieldset2").disabled = true;
}
name.length > 2 && address.length > 2 && city.length > 2 && state.length > 1 && zip.length == 5
function newLogin() {
    alert("Welcome " + document.getElementById("username").value);
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("city", city.value);
    localStorage.setItem("state", state.value);
    oldUser();
}

function oldLogin() {
    let thisUser = document.getElementById("username1").value;
    let thisPass = document.getElementById("password1").value;
    let oldUser = localStorage.getItem("username");
    let oldPass = localStorage.getItem("password"); 
    if((thisUser == oldUser) && (thisPass == oldPass)) {
        alert("Welcome back " + thisUser + "!!");
    }
    else{
        cycleCat(3);
        setTimeout(function() {
            // Alert called after a delay
            alert("Invalid");
        }, 0);
    }
}

function clearBoxes(){
    username.value = "";
    password.value = "";
    city.value = "";
    state.value = "";
    username1 = "";
    password1 = "";
}

function reset(){
    document.getElementById("fieldset2").disabled = true;
    document.getElementById("fieldset3").disabled = true;
    localStorage.clear();
    clearBoxes();
    setTimeout(function() {
        // Alert called after a delay
        alert("Username and password have been cleared.");
    }, 0);
    cycleCat(1);
}

function cycleCat(state){
    catState = state;
    if(state == 1){
        shouldRunCatMove = true;
        pos = 0;
        ground.style.display = "block";
        catFirst.style.display = "block";
        catSecond.style.display = "block";
        cat.style.display = "none";
        catConfused.style.display = "none";
    }
    else if(state == 2){
        shouldRunCatMove = false;
        ground.style.display = "none";
        catFirst.style.display = "none";
        catSecond.style.display = "none";
        cat.style.display = "block";
        catConfused.style.display = "none";
    }
    else if(state == 3){
        shouldRunCatMove = false;
        ground.style.display = "none";
        catFirst.style.display = "none";
        catSecond.style.display = "none";
        cat.style.display = "none";
        catConfused.style.display = "block";
    }
}

let cat1 = document.getElementById("cat1");
let cat2 = document.getElementById("cat2");
let pos = 0;
function moveRight(moveCat){
    if(pos >= 445){pos = 0;}
    pos += 16;
    moveCat.style.left = pos + "px";
}
function catSwitch(){
    if(shouldRunCatMove){
        let catDisplay = window.getComputedStyle(cat1).getPropertyValue("display");
        if(catDisplay == "none"){
            moveRight(cat1);
            cat1.style.display = "block";
            cat2.style.display = "none";
        }
        else{
            moveRight(cat2);
            cat1.style.display = "none";
            cat2.style.display = "block";
        }
    }
}
let intervalID = setInterval(catSwitch, 500);

function catAdd(){
    catState = (catState % 3) + 1;
    cycleCat(catState);
}