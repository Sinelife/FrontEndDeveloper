// Module
let Module = {}; 

// Main EXERCISE
// Function for getting all elements by class
Module.getElementsByClass = function(className) {
    return document.getElementsByClassName(className);
}



//MY OWN added functions
// Function which get all class names of all elements on page
Module.getAllClassNames = function() {
    let elements = document.getElementsByTagName("*");
    let classNames = [];
    for (let i = 0; i < elements.length; i++) {
        addClassNamesOfElementToArray(classNames, elements[i].className);
    } 
    return classNames;
}

// Supporting function for adding all class names of one element to array of class names
let addClassNamesOfElementToArray = function(array, className) {
    let newClassNames = className.split(" ");
    for (let i = 0; i < newClassNames.length; i++) {
        if (!(array.includes(newClassNames[i])) && newClassNames[i] != "") {
            array.push(newClassNames[i]);
        }
    }
}

