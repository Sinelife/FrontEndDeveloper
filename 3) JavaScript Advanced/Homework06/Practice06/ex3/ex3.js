
// Function which starts when window is loaded
window.onload = function() {
    // Getting header of our list
    let header = document.getElementById("header");

    // Getting elements of our list
    let elements = document.getElementsByTagName("li");

    // Set variable that show if list is open
    let isOpen = false;

    // Add listener to body element
    document.body.addEventListener("click", bodyHandler, false);

    // Add listener to header of list
    header.addEventListener("click", handle, false);

    // Initialize list
    initializeList();

    // Function which initialize list(and also hide it)
    function initializeList() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = elements[i].getAttribute("data-value");
        }
        closeList();
    }

    // Function which is called when you click on body
    function bodyHandler() {
        closeList();
    }

    // Function which is called when you click on our list header element
    // It will open list if it is closed. And close list if it is open.
    function handle(e) {
        if (isOpen) {
            closeList();
        } else {
            e.stopPropagation(); // This will stop body event listener
            openList();
        }
    }

    // Function which open list
    function openList() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].hidden = false;
        }
        isOpen = true;
    }

    // Function which hide list
    function closeList() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].hidden = true;
        }
        isOpen = false;
    }

}

