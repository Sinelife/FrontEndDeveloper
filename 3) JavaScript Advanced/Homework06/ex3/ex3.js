// Function which starts when window is loaded
window.addEventListener("load", init, false);

// Function which called when you put mouse on button-discount
function init() {
    let elem = document.getElementById("discount");
    elem.addEventListener("mouseover", function (e) {
        move(elem);
    })
}

// Function which moves discount-button to random place on page
let move = function(elem) {
    elem.style.left = getRandomInt(1, document.body.clientWidth - 60);
    elem.style.top = getRandomInt(1, document.body.clientHeight - 60);
}

// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
