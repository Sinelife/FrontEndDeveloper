// Counter for paragraphs
let counter = 1;

// Function which add paragraph when addButton is clicked
document.getElementById("addButton").onclick = function() {
    if(counter > 10) {
        deleteAllParagraphs();
    } else {
        let p = document.createElement("p");
        p.innerHTML = "Paragraph " + counter++;
        p.style.color = getRandomColor();
        document.body.appendChild(p);
    }
}

// Function which delete all paragraphs on page
let deleteAllParagraphs = function() {
    let paragraphs = document.getElementsByTagName("p");
    let i = 0;
    while(paragraphs[i] != null) {
        document.body.removeChild(paragraphs[i])
    }
    counter = 1;
}

// Function which get random color for paragraph
let getRandomColor = function() {
    return "rgb(" + getRandomInt(50, 250) + "," + getRandomInt(50, 250) + "," + getRandomInt(50, 250) + ")";
}

// Function which get random value from chosen diapason
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
