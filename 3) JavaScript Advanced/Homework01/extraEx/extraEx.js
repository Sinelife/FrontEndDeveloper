// Function-constructor for box objects
function Box(height, width, depth, material) {
    this.height = height;
    this.width = width;
    this.depth = depth;
    this.material = material;
}

// Method volume to calculate volume of box
Box.prototype.volume = function() {
    return this.height * this.width * this.depth;
}

// Method equals to check if box is equals to other
Box.prototype.equals = function(other) {
    return this.material == other.material;
}

// Method toString for outputong object box
Box.prototype.toString = function() {
    return this.material + " Box " + this.width + "x" + this.height + "x" + this.depth;
}

// Creating box objects
let hugeBox = new Box(1000, 1000, 1000, "Wood");
let bigBox = new Box(100, 300, 100, "Iron");
let middleBox = new Box(40, 40, 60, "Wood");
let smallBox = new Box(10, 10, 10, "Gold");
let smallestBox = new Box(2, 1, 1, "Gold");

// Output volumes of boxes
document.write("<h3>Volumes of boxes</h3>");
document.write(hugeBox + " : " + hugeBox.volume() + "<br>");
document.write(bigBox + " : " + bigBox.volume() + "<br>");
document.write(middleBox + " : " + middleBox.volume() + "<br>");
document.write(smallBox + " : " + smallBox.volume() + "<br>");

// Output equality check examples
document.write("<h3>Equality check</h3>");
document.write(hugeBox + " == " + bigBox + "? - " + hugeBox.equals(bigBox) + "<br>");
document.write(hugeBox + " == " + middleBox + "? - " + hugeBox.equals(middleBox) + "<br>");
document.write(hugeBox + " == " + smallBox + "? - " + hugeBox.equals(smallBox) + "<br>");
document.write(bigBox + " == " + middleBox + "? - " + bigBox.equals(middleBox) + "<br>");
document.write(bigBox + " == " + smallBox + "? - " + bigBox.equals(smallBox) + "<br>");
document.write(middleBox + " == " + smallBox + "? - " + middleBox.equals(smallBox) + "<br>");
document.write(smallBox + " == " + smallestBox + "? - " + smallBox.equals(smallestBox) + "<br>");