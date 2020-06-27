// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function which starts when window is loaded
window.onload = function () {
    let computerNum = getRandomInt(0, 100);         // variable for number which computer rand
    let inputField = getElementById("inputField");  // variable for inputField element where you put number
    let resultField = getElementById("resultField");// variable for resultField element where you get message
    let counter = 0;
    let lastRound = 6;

    // Function which check if equals your inputed number and computer number
    getElementById("sendButton").onclick = function() {
        if (inputField.value > computerNum) {
            resultField.innerHTML = "Computer number is smaller than yours. You has " + (lastRound - counter - 1) + " tries.";
        } else if (inputField.value < computerNum) {
            resultField.innerHTML = "Computer number is bigger than yours. You has " + (lastRound - counter - 1) + " tries.";
        } else {
            won(true);
        }
        counter++;
        if (counter == lastRound) {
            won(false);
        }
    }

    // Function which input message of winning or losing game
    let won = function(isWinner) {
        deleteAllElements();
        let endgameElem = document.createElement("h1");
        if (isWinner) {
            endgameElem.innerHTML = "Congratulations! You won from " + (counter + 1) + " tries!";
            endgameElem.style.color = "green";
            counter = 0;
        } else {
            endgameElem.innerHTML = "You loooose :(";
            endgameElem.style.color = "red";
        }
        document.body.appendChild(endgameElem);
    }
    
    // Function which delete all elements in body
    let deleteAllElements = function() {
        let body = document.body;
        while(body.firstChild) {
            body.removeChild(body.firstChild);
        }
    }
}