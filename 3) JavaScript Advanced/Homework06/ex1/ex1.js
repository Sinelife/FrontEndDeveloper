// Variable which control if info saved before closing browser
let isSaved = false;

//Event will before closing browser
window.onbeforeunload = function () {
    if (!isSaved) {
        return "Вы уверены, что хотите закрыть окно?";
    }
}

// Function which starts when window is loaded
window.onload = function () {

    // Add listener for saveButton which allows you to close browser after you clicked it 
    document.getElementById("saveButton").addEventListener(
        "click", 
        function() {
            isSaved = true; 
            alert("Information was saved!");
        }, 
        false
    );
}