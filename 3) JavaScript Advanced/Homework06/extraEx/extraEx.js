// Function which starts when window is loaded
window.onload = function () {
    let div = document.getElementById("moveableDiv");
    let left = 0;
    let top = 0;
    const step = 25;

    // Function which get random value from chosen diapason
    let getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    // Function which add random color to background-color of element
    let getRandomColor = function(elem) {
        return elem.style.backgroundColor = "rgb(" + getRandomInt(30, 240) + ", " + getRandomInt(30, 240) + "," + getRandomInt(30, 240) + ")";
    }

    // Add listener for keboard
    document.addEventListener('keyup', function(event) {
        switch(event.keyCode) {
            case 40: //move up if UP button clicked
                top += step;
                div.style.top = top;
                break;
            case 38: //move down if DOWN button clicked
                top -= step;
                div.style.top = top;
                break;
            case 39: //move right if RIGHT button clicked 
                left += step;
                div.style.left = left;
                break;
            case 37: //move left if LEFT button clicked 
                left -= step;
                div.style.left = left;
                break;
            default: //change color to random if other button was clicked
                div.style.backgroundColor = getRandomColor(div);
        }
    });
}




