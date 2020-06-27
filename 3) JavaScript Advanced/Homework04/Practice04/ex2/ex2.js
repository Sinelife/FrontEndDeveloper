// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

getElementById("p1").onclick = function() {
    increaseSize(getElementById("p2"));
}


getElementById("p2").onclick = function() {
    increaseSize(getElementById("p1"));
}

let increaseSize = function(elem) {
    let fontSize = parseFloat(window.getComputedStyle(elem , null).getPropertyValue('font-size'));
    elem.style.fontSize = (fontSize + 1) + "px";
}