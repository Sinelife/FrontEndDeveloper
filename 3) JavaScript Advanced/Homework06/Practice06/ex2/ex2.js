// Function which starts when window is loaded
window.onload = function () {

    // Get MainBlock element
    let mainBlock = document.getElementById("mainBlock");
  
    // Adding listener to mainBlock
    mainBlock.addEventListener("click", handle, false);

    // Function which called when you click on button on mainBlock(And it delete subblock in mainBlock)
    function handle(e) {
        let elem = e.target;
        mainBlock.removeChild(elem.parentElement);
    }
}