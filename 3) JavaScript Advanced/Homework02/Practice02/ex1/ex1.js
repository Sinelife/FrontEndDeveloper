// Function which is called when window is load
window.onload = function() {
    // Get all li elements of list
    let listElements = document.getElementsByTagName("li");

    // Changing li elements of list
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].innerHTML = "Element " + i;
        listElements[i].style.color = "blue";
    }
}


