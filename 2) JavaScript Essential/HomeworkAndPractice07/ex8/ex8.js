// Ex 8
document.write("<h1>Ex 8</h1>");

// Function for getting info about simple elements
let getInfoAboutSimpleElemsOfArrays = function(arr1, arr2) {
    let resultArray = [];
    for (let i = 0; i < arr1.length; i++) {
        if (contains(arr2, arr1[i])) {
            resultArray.push(arr1[i]);
        }
    }
    return "Two arrays has " + resultArray.length + " simple elements<br>Simple Elements - " + resultArray;
}

// FUnction which check if elem contains in array
let contains = function(array, otherElem) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == otherElem) {
            return true;
        }
    }
    return false;
}


// Our arrays
let array1 = ["cat", "dog", "fish", "lion", "zebra", "ant", "spider", "dragon", "parrot", "bee"];
let array2 = ["spider", "ant", "butterfly", "bee", "hornet"];

// Example
document.write("Array1: " + array1 + "<br>");
document.write("Array2: " + array2 + "<br><br>");
document.write(getInfoAboutSimpleElemsOfArrays(array1, array2));