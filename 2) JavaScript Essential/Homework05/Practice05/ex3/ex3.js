// EX 3
document.write("EX 3<br>");

// Creating an object with array property inside
let myObject = {
    array: [],
    fillArr: function(n) {
        for (let i = 0; i < n; i++) {
            this.array[i] = Math.floor(Math.random() * 10);
        }
    },
    output: function() {
        for (let i = 0; i < this.array.length; i++) {
            document.write(this.array[i] + "<br>");
        }
    }
}

// Fill array with randon numbers
myObject.fillArr(20);

// Oytput array-property of object
myObject.output();