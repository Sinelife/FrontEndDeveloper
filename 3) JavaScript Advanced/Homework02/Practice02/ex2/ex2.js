// Function which is called when window is load
window.onload = function() {
    // Get div element
    let divElem = document.getElementsByTagName("div")[0];

    // Function which called when div element clicked
    divElem.onclick = function() {
        divElem.style.backgroundColor = "blue";
        let p = document.createElement("p");
        p.innerHTML = "Classwork";
        divElem.appendChild(p);
    }
}


