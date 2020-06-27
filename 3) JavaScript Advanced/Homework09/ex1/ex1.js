// Add event listener which starts when page loaded
window.addEventListener("load", handle, false);

// Function-handler
function handle() {
    // Image which we would change
    let image = document.images[0]; 

    // Image sources array
    let imageSrcArray = ["img/Krul.jpg", "img/Megumin.jpg", "img/Nezuko.jpg", "img/Chino.jpg", "img/Chiya.jpg", "img/Senko.jpg", "img/Rem.jpg", "img/Ram.jpg"];

    // Button block element which contains buttons
    let buttonBlock = document.getElementById("buttonBlock");

    // Call function which create necessary number of buttons on buttonBlock
    initilaizeButtons();

    // Function which create necessary number of buttons on buttonBlock(For every value in imageSrcArray we create one button)
    function initilaizeButtons() {
        for (let i = 0; i < imageSrcArray.length; i++) {
            createButton(imageSrcArray[i]);
        }
    }

    // Function which create a button
    function createButton(imageSrc) {
        let button = document.createElement("input");
        button.type = "button";
        let start = imageSrc.indexOf("/") + 1;
        let end = imageSrc.indexOf(".");
        button.value = imageSrc.substring(start, end);
        buttonBlock.appendChild(button);
    }
    
    // Add event listener for buttonBlock
    buttonBlock.addEventListener("click", change, false);

    // Function which change image when you click on button
    function change(e) {
        if (e.target.type == "button") {
            image.src = getImageSrcByButtonValue(e.target.value);
        }
    }

    // Function which gets correct imageSrc by button value
    function getImageSrcByButtonValue(value) {
        for (let i = 0; i < imageSrcArray.length; i++) {
            if (imageSrcArray[i].includes(value)) {
                return imageSrcArray[i];
            }
        }
    }
}