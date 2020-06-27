// Add event listener which starts when page loaded
window.addEventListener("load", handle, false);

// Function-handler
function handle() {

    // Big image whch show chosen image from gallery
    let bigImage = document.getElementById("bigImage");

    // Image sources array
    let imageSrcArray = ["img/Krul.jpg", "img/Megumin.jpg", "img/Nezuko.jpg", "img/Chino.jpg", "img/Chiya.jpg", "img/Senko.jpg", "img/Rem.jpg", "img/Ram.jpg"];
    
    // Block which contains all images
    let gallery = document.getElementById("gallery");

    // Call function which create all images in gallery from imageSrcArray
    initilaizeImages();

    // Function which create create all images in gallery from imageSrcArray
    function initilaizeImages() {
        for (let i = 0; i < imageSrcArray.length; i++) {
            createImage(imageSrcArray[i]);
        }
    }

    // Function which create an image
    function createImage(imageSrc) {
        let image = document.createElement("img");
        image.src = imageSrc;
        gallery.appendChild(image);
    }

    // Add event listener for gallery
    gallery.addEventListener("click", changeBigImage, false);
    
    // Function which change big image when you click on one of small images from gallery
    function changeBigImage(e) {
        if (e.target.src) {
            bigImage.hidden = false;
            bigImage.src = e.target.src;
        }
    }
}