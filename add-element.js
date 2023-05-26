// Create a new element and store it in a variable.
var newEl = document.createElement('li');

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');

// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);

const item = document.getElementById("item");
const form = document.getElementById("form");

function addLi(name) {
    var newEl = document.createElement('li');

    var newText = document.createTextNode(name);

    newEl.appendChild(newText);

    var position = document.getElementsByTagName('ul')[0];

    position.appendChild(newEl);
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (item.value == "" || item.value == null) {
        alert("Please enter an item.")
    }
    else {
        addLi(item.value)
    }
})