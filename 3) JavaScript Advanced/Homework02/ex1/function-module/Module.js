// Module based on anonymous function
(function () {
    // getting all elements <p>
    let paragraphs = document.getElementsByTagName("p");

    for (let i = 0; i < paragraphs.length; i++) {
        // cnanging text in every paragraph
        paragraphs[i].innerText= "PARAGRAPH";
    }
})();


