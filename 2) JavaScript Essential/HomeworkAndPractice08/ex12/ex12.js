// Ex 12
document.write("<h1>Ex 12</h1>");

let ukraine = {
    name: "Ukraine",
    population: 43_733_762
}

let usa = {
    name: "USA",
    population: 331_002_651
}

let japan = {
    name: "Japan",
    population: 126_476_461
}

let southKorea = {
    name: "South Korea",
    population: 51_269_185
}

let chine = {
    name: "Chine",
    population: 1_439_323_776
}

let poland = {
    name: "Poland",
    population: 37_846_611
}

let india = {
    name: "India",
    population: 1_380_004_385
}

let france = {
    name: "France",
    population: 65_273_511
}


// Method for output array of countries
let output = function(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(array[i].name + " :" + array[i].population + "<br>");
    }
    document.write("<hr>");
}

// Method for sorting countries by population
let sort = function(array) {
    array.sort(function(a, b) {return parseInt(b.population) - parseInt(a.population);});
} 


// Example
let countries = [ukraine, chine, southKorea, japan, india, france, usa, poland];
document.write("<h2>Before sort:</h2>");
output(countries);

sort(countries);

document.write("<h2>After sort:</h2>");
output(countries);