// Add event listener which starts when page loaded
window.addEventListener("load", handle, false);

// Function-handler
function handle() {

    // Image sources array
    let imageSrcArray = [
        "img/Krul.jpg", 
        "img/Megumin.jpg", 
        "img/Nezuko.jpg", 
        "img/Chino.jpg", 
        "img/Chiya.jpg", 
        "img/Senko.jpg", 
        "img/Rem.jpg", 
        "img/Ram.jpg",
        "https://cs11.pikabu.ru/post_img/2018/08/06/4/1533528989189780918.jpg",
        "https://i.pinimg.com/originals/0d/a9/bc/0da9bc2f9ff55187f4685e519d0d69a8.jpg",
        "https://static.zerochan.net/Kousaka.Honoka.full.1813253.jpg"
    ];
    
    // Block which contains all images
    let gallery = document.getElementById("gallery");

    // Call function which create all images in gallery from imageSrcArray
    initilaizeImages();

    // Function which create create all images in gallery from imageSrcArray
    function initilaizeImages() {
        for (let i = 0; i < imageSrcArray.length; i++) {
            createBlock(imageSrcArray[i]);
        }
    }

    // Function which create div-block which contains image and div which contains src of image
    function createBlock(imageSrc) {
        let block = document.createElement("div");
        block.className = "block";
        createImage(block, imageSrc);
        createSrcDiv(block, imageSrc);
        gallery.appendChild(block);
    }

    // Function which create div with src of image
    function createSrcDiv(block, imageSrc) {
        let div = document.createElement("div");
        div.className = "src";
        div.innerHTML = imageSrc;
        block.appendChild(div);
    }

    // Function which create an image
    function createImage(block, imageSrc) {
        let image = document.createElement("img");
        image.src = imageSrc;
        block.appendChild(image);
    }

    let images = document.images; // Array with all images on page
    let counter = 0; // counter for addBorder(to know for which image you should add border)
    let intervalHandler = window.setInterval(addBorder, 1000); //interval handler

    // Function which addBorder to image
    function addBorder() {
        console.log(counter);
        if (counter < images.length) {
            images[counter++].className = "imgBorder";
        } else {
            window.clearInterval(intervalHandler);
        }
    }
}