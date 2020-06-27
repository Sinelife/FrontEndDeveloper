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
    getElementById("saveButton").addEventListener("click", saveCookies, false);
    
    // All colors which we will use and all fonts
    let colors = ["red", "blue", "green", "cyan", "yellow", "orange", "gray", "violet", "pink", "purple", "magenta", "white"];
    let fonts = ["Indie Flower", "Caveat", "Montserrat", "Source Code Pro", "Times New Roman"];

    // Adding all colors to our select-tag elements
    fillSelectorWithArray(colorSelector, colors);
    fillSelectorWithArray(fontSelector, fonts);

    // Function which save styles in cookies
    function saveCookies() {
        document.cookie = "fontSize=" + sizeField.value + "px;";
        document.cookie = "color=" + textColorSelector.value + ";";
        let selectedColor = colorSelector.options[colorSelector.selectedIndex].value;
        document.cookie = "backgroundColor=" + selectedColor + ";";
        let font = fontSelector.options[fontSelector.selectedIndex].value;
        document.cookie = "fontFamily=" + font + ";";
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
        document.body.style[chosenStyle] = getCookieValue(chosenStyle);
    }

    // Function which get cookie-value bu cookie-name
    function getCookieValue(cookieName) {
        let allcookies = document.cookie;
        let pos = allcookies.indexOf(cookieName + "=");
        if (pos != -1) {
            let start = pos + cookieName.length + 1;
            let end = allcookies.indexOf(";", start);
            if (end == -1) {
                end = allcookies.length;
            }
            let value = allcookies.substring(start, end);
            return decodeURIComponent(value);
        }
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