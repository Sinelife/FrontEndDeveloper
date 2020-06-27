// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

let colors = ["red", "green", "cyan", "violet", "yellow"];
let counter = 0;

getElementById("myDiv").onclick = function() {
    changeColor(getElementById("myDiv"));
    increaseSize(getElementById("myDiv"));
}

let changeColor = function(elem) {
    elem.style.backgroundColor = colors[counter++ % colors.length];
}

let increaseSize = function(elem) {
    let width = parseFloat(window.getComputedStyle(elem , null).getPropertyValue('width'));
    let height = parseFloat(window.getComputedStyle(elem , null).getPropertyValue('height'));
    elem.style.width = (width + 5) + "px";
    elem.style.height = (height + 5) + "px";
}