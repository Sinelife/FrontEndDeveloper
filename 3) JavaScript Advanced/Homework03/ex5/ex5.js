// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

window.onload = function () {
    let intervalHandler;  
    let ticker;
    let counter = 10;

    // Function which show change every period of time
    function move(){
        ticker.style.left = ++counter;
        if (counter > document.body.clientWidth) {
            counter = -230;
        }
    }

    // Function which starts when startButton is pressed
    getElementById("startButton").onclick = function () {
        ticker = getElementById("ticker");
        ticker.innerHTML = getElementById("text-input").value;
        ticker.style.position = "absolute";
        ticker.style.left = counter;
        intervalHandler = setInterval(move, 1);
    }
}