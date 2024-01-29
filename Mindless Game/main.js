const arrow = document.getElementById("arrow");
let lastnum = 0;

function start(){
    left();
    document.getElementById("startBTN").style.display = "none";
}

function random(lastnum){
    const num = Math.floor(Math.random() * 4); //num between 0-3
    if (num !== lastnum){ //repeat until not the same as last number
        return num;
    } else {
        return random(lastnum);
    }
}

//check for wrong input
//up = 38
//down = 40
//left = 37
//right = 39
function pickArrow(num, event){
    lastnum = num;
    if(num === 0 && event.key ){
        left(event);
    } else if(num === 1){
        down(event);
    } else if(num === 2){
        right(event);
    } else if(num === 3){
        up(event);
    } else {
        console.log("Invalid number generated: " + num);
    }
}

document.addEventListener("keydown", function(event) {
    pickArrow(random(lastnum), event);
});

function left(event){
    arrow.innerHTML = "left";
    document.body.style.backgroundColor = "#6DF6FF";
    //pickArrow(random(lastnum));
}

function down(event){
    arrow.innerHTML = "down";
    document.body.style.backgroundColor = "#C0FF6F";
    //pickArrow(random(lastnum));
}

function right(event){
    arrow.innerHTML = "right";
    document.body.style.backgroundColor = "#FF6D6D";
    //pickArrow(random(lastnum));
}

function up(event){
    arrow.innerHTML = "up";
    document.body.style.backgroundColor = "#FDFF6D";
    //pickArrow(random(lastnum));
}