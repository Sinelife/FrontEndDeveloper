// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function which starts when window is loaded
window.onload = function () {
    // Get info from cookies and change page styles after page load
    updatePage();

    let sizeField = getElementById("sizeField");
    let colorSelector = getElementById("colorSelector");
    let textColorSelector = getElementById("textColorSelector");
    let fontSelector = getElementById("fontSelector");

    // Add event listener to saveButton
    getElementById("saveButton").addEventListener("click", saveStyles, false);
    
    // All colors which we will use and all fonts
    let colors = ["red", "blue", "green", "cyan", "yellow", "orange", "gray", "violet", "pink", "purple", "magenta", "white"];
    let fonts = ["Indie Flower", "Caveat", "Montserrat", "Source Code Pro", "Times New Roman"];

    // Adding all colors to our select-tag elements
    fillSelectorWithArray(colorSelector, colors);
    fillSelectorWithArray(fontSelector, fonts);

    // Function which save styles in localStorage
    function saveStyles() {
        window.localStorage.fontSize = sizeField.value;
        window.localStorage.color = textColorSelector.value;
        window.localStorage.backgroundColor = colorSelector.options[colorSelector.selectedIndex].value;;
        window.localStorage.fontFamily = fontSelector.options[fontSelector.selectedIndex].value;
        updatePage();
    }

    // Function which get info from cookies and change page
    function updatePage() {
        updateStyle("fontSize");
        updateStyle("backgroundColor");
        updateStyle("fontFamily");
        updateStyle("color");
    }

    // Function which update style
    function updateStyle(chosenStyle) {
        document.body.style[chosenStyle] = window.localStorage.getItem(chosenStyle);
    }

    // Function which fill select-element with colors
    function fillSelectorWithArray(selector, array) {
        for (let i = 0; i < array.length; i++) {
            let option = document.createElement("option");
            option.text = array[i];
            selector.add(option);
        }
    }
}