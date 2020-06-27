// Array with id's of elements which are unchangeable
let unchangeableElemIds = ["select-Unchangeable", "findButton-Unchangeable"];
    
// Array with all class names of all elements(getAllClassNames function is from Module)
let allClassNames = Module.getAllClassNames();

// Select-tag element where all class names would be
let selectBox = document.getElementById("select-Unchangeable");

// Adding all class names to our select-tag element
for (let i = 0; i < allClassNames.length; i++) {
    let option = document.createElement("option");
    option.text = allClassNames[i];
    selectBox.add(option);
}

// Function which is called when findButton is clicked
// It select all elements with chosen class
document.getElementById("findButton-Unchangeable").onclick = function() {
    let selectedClassName = selectBox.options[selectBox.selectedIndex].value;
    let elements = Module.getElementsByClass(selectedClassName);
    addBorder(elements);
}

// Function which add border to all elements in array
let addBorder = function(elements) {
    deleteAllBorders();
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.border = "1px solid red";
    }
}

// Function which delete all borders of all elements on page(except elements which ids in array unchangable)
let deleteAllBorders = function() {
    let elements = document.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
        if (!unchangeableElemIds.includes(elements[i].id)) {
            elements[i].style.border = "none";
        }
    }
}
