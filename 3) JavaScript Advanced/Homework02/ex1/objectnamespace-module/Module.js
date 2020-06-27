// Module based on object namespace

// Creating object
let Module = {}

// CReating function in object
Module.startModule = function () {
    // getting all elements <p>
    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        // cnanging text in every paragraph
        paragraphs[i].innerText= "PARAGRAPH";
    }
}


