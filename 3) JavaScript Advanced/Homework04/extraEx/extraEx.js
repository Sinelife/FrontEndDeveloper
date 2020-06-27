// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {
    // Array of div elements
    let divs = document.getElementsByTagName("div");

    // Id of current div element
    let currentId = 0;

    // Function which starts when mainButton is pressed
    getElementById("mainButton").onclick = function () {
        let div = divs[currentId];
        divs[getPreviousId(currentId)].style.backgroundColor = "green";
        div.style.backgroundColor = "red";
        currentId = getNextId(currentId);
    }

    // Function to get id of next element
    let getNextId = function(id) {
        return currentId == divs.length - 1 ? 0 : currentId + 1;
    }

    // Function to get id of previous element
    let getPreviousId = function(id) {
        return currentId == 0 ? divs.length - 1 : currentId - 1;
    }
}




