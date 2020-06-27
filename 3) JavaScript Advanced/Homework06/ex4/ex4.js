// Function which starts when window is loaded
window.onload = function () {

    // Add listener to react on pressed Ctrl + S,   Ctrl + A,   Ctrl + Shift + S
    document.addEventListener('keydown', function(event) {
        if(event.keyCode == 83 && event.ctrlKey && event.shiftKey) {
            createMessage("All saved!");
        } else if (event.keyCode == 65 && event.ctrlKey) {
            createMessage("All selected!");
        } else if (event.keyCode == 83 && event.ctrlKey) {
            createMessage("Saved!");
        }
    });

    // Function which create message on page
    let createMessage = function(message) {
        let body = document.getElementsByTagName("body")[0];
        let elem = document.createElement("h2");
        elem.style.color = "green";
        elem.innerHTML = message;
        body.appendChild(elem);
    }
}




