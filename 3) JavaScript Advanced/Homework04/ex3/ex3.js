// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function which starts when window is loaded
window.onload = function () {
    let divs = document.getElementsByTagName("div");

    // Set random color for every of our divs
    for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = "rgb(" + getRandomInt(30, 240) + ", " + getRandomInt(30, 240) + "," + getRandomInt(30, 240) + ")";
    }
    setInterval(move, 1000);

    // Function which change place of every of ours divs every second
    function move(){
        for (let i = 0; i < divs.length; i++) {
            divs[i].style.left = getRandomInt(1, document.body.clientWidth - 60);
            divs[i].style.top = getRandomInt(1, document.body.clientHeight - 60);
        }
    }
}