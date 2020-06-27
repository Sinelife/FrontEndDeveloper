// 
// Module for drawing diagrams
// 

// Object to contain Module functions
let Module = new Object();

// Function which draws diagrams
Module.createBarChart = function(canvas, data, width, height, color) {

    if (typeof canvas == "string") {
        canvas = document.getElementById(canvas);
    }
    canvas.width = width;   // Set canvas width
    canvas.height = height; // Set canvas height
    let context = canvas.getContext("2d");

    // Finding max value in data array
    let max = getMaxNumOfArray(data);


    let scale = height / max;
    let barWidth = Math.floor(width / data.length);

    // Create diagram element 
    for (let i = 0; i < data.length; i++) {
        createDiagramElement(i);
    }


    // Function which create diagram element
    function createDiagramElement(i) {
        let barHeight = data[i] * scale;
        x = barWidth * i;
        y = height - barHeight;
        context.fillStyle = color;
        context.fillRect(x, y, barWidth - 2, barHeight);
    }
    
    // Function which get max number from array
    function getMaxNumOfArray() {
        let max = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < data.length; i++) {
            if (max < data[i]) {
                max = data[i];
            }
        }
        return max;
    }
}
