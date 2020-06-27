// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Function for selectiong all div elements and adding border for it when allDivs button clicked
getElementById("allDivs").onclick = function() {
    addBorder(document.getElementsByTagName("div"));
}

// Function for selectiong all paragraph((<p>) elements and adding border for it when allParagraphs button clicked
getElementById("allParagraphs").onclick = function() {
    addBorder(document.getElementsByTagName("p"));
}

// Function for selectiong all link(<a>) elements and adding border for it when allLinks button clicked
getElementById("allLinks").onclick = function() {
    addBorder(document.getElementsByTagName("a"));
}

// Function which remove selection of any types of elements
getElementById("none").onclick = function() {
    deleteAllBorders();
}

// Function which add border to all elements in array
let addBorder = function(elements) {
    deleteAllBorders();
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "1px solid red";
    }
}

// Function which delete all borders of all elements on page
function deleteAllBorders() {
    let elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "none";
    }
}
