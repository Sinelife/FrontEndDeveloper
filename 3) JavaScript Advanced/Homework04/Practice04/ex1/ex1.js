// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}


getElementById("btn1").onclick = function() {
    changeColor(document.getElementsByTagName("p"));
}


getElementById("btn2").onclick = function() {
    changeColor(document.getElementsByTagName("div"));
}


getElementById("btn3").onclick = function() {
    changeColor(document.getElementsByTagName("h1"));
}

let changeColor = function(elements) {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = getRandomColor();
    }
}

// Function which get random color for paragraph
let getRandomColor = function() {
    return "rgb(" + getRandomInt(50, 250) + "," + getRandomInt(50, 250) + "," + getRandomInt(50, 250) + ")";
}

// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
