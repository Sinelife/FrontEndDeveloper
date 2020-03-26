// EX 2

function getDiapasonArray(x, y) {
    let min = x > y ? y : x;
    let max = x > y ? x : y;
    let array = [];
    for (let i = min, j = 0; i <= max; i++, j++) {
        array[j] = i;
    }
    return array;
}


document.write("EX 2<br>");
let x = prompt("Input first number: ");
let y = prompt("Input second number: ");
document.write(getDiapasonArray(x, y) + "<br>");