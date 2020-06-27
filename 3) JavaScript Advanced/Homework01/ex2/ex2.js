// Constructor-function of Students objects
function Human(name, surname, age, gender) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
}

// Method toString 
Human.prototype.toString = function() {
    return "<br>" + this.name + " " + this.surname + " (age: " + this.age + ")";
}

// Method for sorting(which chose in which way sort array)
let sort = function(array, sortingSide) {
    if (sortingSide == "increase") {
        array.sort(function(a, b) {return parseInt(a.age) - parseInt(b.age);});
    } else {
        array.sort(function(a, b) {return parseInt(b.age) - parseInt(a.age);});
    }
} 

// Fill aray of humans
let array = [
    new Human("Zhenia", "Alexandrova", 16, "female"),
    new Human("Alexandra", "Petrova", 28, "male"),
    new Human("Andrey", "Pavlov", 34, "male"),
    new Human("Svetlana", "Ivanova", 24, "female"),
    new Human("Fedor", "Demchenko", 56, "male"),
    new Human("Lena", "Alexandrova", 22, "female"),
    new Human("Pavel", "Andreev", 44, "male"),
    new Human("Cristina", "Demianchuk", 29, "female")
];

// Output array before sorting
document.write("<h2>Before sort</h2>");
document.write(array);

// Increase sort by age
sort(array, "increase");

// Output array after increase sorting
document.write("<hr><h2>After Increase sort</h2>");
document.write(array);

// Decrease sort by age
sort(array, "decrease");

// Output array after decrease sorting
document.write("<hr><h2>After Decrease sort</h2>");
document.write(array);