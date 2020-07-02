// Data for filling price
let fillingData = {
    "ch": 5,
    "ca": 6,
    "be": 10
}

// Chosing an ice-cream size
let size : string = prompt("Input size of ice-cream(big or small)");

// Chosing an ice-cream filling number
let fillingNum : number = parseInt(prompt("Input num of fillings in ice-cream"));

// Chosing fillings for ice-cream
let fillingList : string[] = [];
for (let i = 0; i < fillingNum; i++) {
    let fillingElem = prompt("Input which filling you would chose(chocolate - ch, caramel - ca, berries - be)");
    fillingList.push(fillingElem);
}

// Chosing if you want marshmallows in ice-cream
let marshmallows : string = prompt("Chose if you want to put marshmallows(y - yes)");

// Code for calculating which ice-cream was chosen
let result = 0;
result += (size == "big") ? 25 : 10;
for (let i = 0; i < fillingNum; i++) {
    result += fillingData[fillingList[i]];
}
result += (marshmallows == "y") ? 5 : 0;

// Result
console.log("IceCream costs " + result);

