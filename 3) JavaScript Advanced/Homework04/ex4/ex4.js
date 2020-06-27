// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {
    let div = getElementById("moveableDiv");
    let left = parseFloat(window.getComputedStyle(div , null).getPropertyValue('left'));
    let top = parseFloat(window.getComputedStyle(div , null).getPropertyValue('top'));

    // Function for moving div left
    getElementById("leftButton").onclick = function () {
        console.log(div.style.left);
        left -= (left > 0) ? 100 : 0;
        div.style.left = left;
    }
   
    // Function for moving div right
    getElementById("rightButton").onclick = function () {
        left += 100;
        div.style.left = left;
    }

    // Function for moving div up
    getElementById("upButton").onclick = function () {
        top -= (top > 100) ? 100 : 0;
        div.style.top = top;
    }

    // Function for moving div down
    getElementById("downButton").onclick = function () {
        top += 100;
        div.style.top = top;
    }
}