// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {
    
    // Getting list element
    let list = document.getElementsByTagName("ul")[0];

    // Call function to fill list elements with text
    fillList();
    
    // Function which fill all list elements with text
    function fillList() {
        let elements = document.getElementsByTagName("li");
        for (let i = 0; i < elements.length; i++) {
            elements[i].innerHTML = "Element " + (i + 1);
        }
    }

    // Add listener to list
    list.addEventListener("click", handle, false);

    // Function which called when you click on list element
    function handle(e) {
        console.log(e.altKey);
        let elem = e.target;
        if (elem.className != "selected") {
            if (!e.altKey) {
                deselectAllElements();
            }
            select(elem);
        } else {
            deselect(elem);
        }
    }

    //Fucntion which deselect all list elements
    function deselectAllElements() {
        let elements = document.getElementsByTagName("li");
        for (let i = 0; i < elements.length; i++) {
            deselect(elements[i]);
        }
    }

    // Fucntion which deselect element
    function deselect(elem) {
        elem.classList = "";
    }

    // Fucntion which select element
    function select(elem) {
        elem.classList.add("selected");
    }
}