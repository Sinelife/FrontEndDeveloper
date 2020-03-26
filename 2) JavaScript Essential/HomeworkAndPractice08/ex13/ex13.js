// Ex 13
document.write("<h1>Ex 13</h1>");

//Function which get sum of all arguments which you send as parameters
let getSum = function() {
    return arguments == 0 ? 0 : getSumOfArrayElems(arguments);
}

//Function which  get sum of all elements of array
let getSumOfArrayElems = function(args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

// Example
document.write("Sum(1,2,3,4,5,6,7,8,9,10) = " + getSum(1,2,3,4,5,6,7,8,9,10) + "<br>");
document.write("Sum(1,2,3,4) = " + getSum(1,2,3,4) + "<br>");
document.write("Sum(1,2) = " + getSum(1,2) + "<br>");
document.write("Sum(1) = " + getSum(1) + "<br>");
document.write("Sum() = " + getSum() + "<br>");
