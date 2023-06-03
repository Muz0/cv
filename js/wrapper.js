// Define variables to store references to DOM elements
let form;
let unwrapButton;
let wrapButton;

function defineElements() {
    form = document.getElementById("myForm");
    unwrapButton = document.getElementById("unwrap_button");
    wrapButton = document.getElementById("wrap_button");
}

// Toggle the display of the form element and the "unwrap" button
function unwrap() {
    form.style.display = "block";
    unwrapButton.style.display = "none";
    form.style.border = "1px solid black";
}

// Toggle the display of the form element and the "wrap" button
function wrap() {
    form.style.display = "none"
    unwrapButton.style.display = "block";
}

// Initialize the form display state
let isFormVisible = false;

function init() {
    defineElements();
    if (!isFormVisible) {
        // If the form is currently hidden, show it
        unwrap();
       
        isFormVisible = true;
    } else {
        // If the form is currently visible, hide it
        wrap();
        isFormVisible = false;
    }
}
