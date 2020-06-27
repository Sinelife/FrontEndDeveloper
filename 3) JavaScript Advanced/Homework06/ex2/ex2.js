// Function which starts when window is loaded
window.onload = function () {

    // Add listener to react on pressed keyboard buttons(change text to other color)
    document.addEventListener('keydown', function(event) {
        switch(event.keyCode) {
            case 82:
                changeColor("red");
                break;
            case 66:
                changeColor("blue");
                break;
            case 71:
                changeColor("green");
                break;
            case 79:
                changeColor("orange");
                break;
            case 89:
                changeColor("yellow");
                break;
            case 86:
                changeColor("violet");
                break;
            case 80:
                changeColor("pink");
                break;
            case 67:
                changeColor("cyan");
                break;
            case 73:
                changeColor("indigo");
                break;
            case 77:
                changeColor("magenta");
                break;
            case 78:
                changeColor("navy");
                break;
            case 84:
                changeColor("tan");
                break;
            default:
                changeColor("black");
        }
    });

    // Function which change color of all text on page
    let changeColor = function(color) {
        let elements = document.body.getElementsByTagName("*");
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.color = color;
        }
    }
}