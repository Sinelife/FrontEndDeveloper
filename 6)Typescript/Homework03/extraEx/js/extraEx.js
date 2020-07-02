// Our class which recieve string array
class MyStringArray {
    // Constructor which take string array
    constructor(values) {
        this.values = [];
        this.values = values;
    }
    // Generator-function which check if input is not string and output error
    *getValues() {
        for (let i = 0; i < this.values.length; i++) {
            if (typeof this.values[i] != "string") {
                throw Error("Type of element is not string!!!");
            }
            yield this.values[i];
        }
    }
}
// Example code with correct string array
let demonNames = ["Astaroth", "Asmodeus", "Abbadon", "Lilith", "Azazel", "Beelzebub"]; //Create string array
let iterable = new MyStringArray(demonNames).getValues(); //Create iterable object by calling generator-function of MyStringArray class
let counter = 0;
for (const item of iterable) { //iterate over a list of strings using our object iterable
    console.log(++counter + ")" + item); //iteration will be succesfully finished because all elements are strings
}
console.log("\n\n\n");
// Example code with wrong string array(it contains non string element)
let angelNames = ["Gabriel", "Michael", "Raguel", "Raphael", "Remiel", "Uriel", "Zerachiel", 1223, "Turiel"]; //Create string array with wrong element which is not string
let iterable2 = new MyStringArray(angelNames).getValues(); //Create iterable object by calling generator-function of MyStringArray class
counter = 0;
for (const item of iterable2) { //iterate over a list of strings using our object iterable
    console.log(++counter + ")" + item); //when iterator get to non string element you will get error message and iterating will stop
}
//# sourceMappingURL=extraEx.js.map