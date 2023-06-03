var  mybutton = document.querySelector("button");
mybutton.addEventListener("click", function(event) {


var element = document.getElementsByTagName("div");
for (index = element.length - 1; index >= 0; index--) {
    element[index].parentNode.removeChild(element[index]);
}

// Let us stop the propagation of events

function getConst(identity) {
    const a = document.getElementById(identity);
    return a.options[a.selectedIndex].value;
}

event.stopPropagation();
  });
  addEventListener("click", function(event) {
    const a = document.getElementById("color");
    const color = a.options[a.selectedIndex].value;
    const b = document.getElementById("size");
    const size = b.options[b.selectedIndex].value;
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (event.pageX - 4) + "px";
    dot.style.top = (event.pageY - 4) + "px";
    dot.style.background = color;
    dot.style.height = size;
    dot.style.width = size;
    document.body.appendChild(dot);
  });