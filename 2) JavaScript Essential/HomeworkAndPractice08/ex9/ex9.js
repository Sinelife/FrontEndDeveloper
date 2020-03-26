// Ex 9

// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Main function
let run = function() {
    let computerNumber = getRandomInt(0, 10);
    let counter = 1;
    let isWinner = false;
    while (counter <= 5) {
        let num = prompt("Input number: ");
        if (num == computerNumber) {
            isWinner = true;
            break;
        } else if (num > computerNumber) {
            alert("Computer number is smaller than yours. Remained " + (5 - counter) + " tries.");
        } else {
            alert("Computer number is bigger than yours. Remained " + (5 - counter) + " tries.");
        }
        counter++;
    }
    if (isWinner) {
        alert("Congratulstions!!!You won from " + counter + " try!!");
    } else {
        alert("You Loooose!!!!!!");
    }
}

// Running game
run();