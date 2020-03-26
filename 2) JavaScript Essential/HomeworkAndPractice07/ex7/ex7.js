// Ex 7


// Main function
let run = function() {
    let drinks = [];
    while (true) {
        let drink = new Object();
        getDrinkType(drink);
        getDrinkSize(drink);
        drinks.push(drink);
        let answer = prompt("Do you want to buy something else?(write 'no' to end program)");
        if (answer == "no") {
            break;
        }
    }
    outputALLDrinks(drinks);
}

// Function where you chose type of drink(tea or coffee)
let getDrinkType = function(drink) {
    do {
        drink.type = prompt("What do you want to buy?(coffee or tea)");
        switch(drink.type) {
            case "tea": 
                drink.price = 10;
                getTeaColor(drink);
                break;
            case "coffee": 
                drink.price = 12;
                break;
            default:
                alert("We don't have such drink! Write type of drink one more time!");
        }
    } while(drink.type != "tea" && drink.type != "coffee")
}

// Function where you chose color of tea(green and black)
let getTeaColor = function(drink) {
    do {
        drink.color = prompt("What tea do you want to buy?(green or black)");
        switch(drink.color) {
            case "green": 
                drink.price = 11;
                break;
            case "black": 
                break;
            default:
                alert("We don't have such color! Write color one more time!");
        }
    } while(drink.color != "green" && drink.color != "black")
}

// Function where you chose size of drink(small, middle or big)
let getDrinkSize = function(drink) {
    do {
        drink.size = prompt("What size of glass of coffee do you want?(small, middle or big)");
        switch(drink.size) {
            case "small": 
                break;
            case "middle": 
                drink.price *= 2;
                break;
            case "big": 
                drink.price *= 3;
                break;
            default:
                alert("We don't have such size! Write size one more time!");
        }
    } while(drink.size != "big" && drink.size != "middle" && drink.size != "small")
}

// Output info about all drinks and summary price
let outputALLDrinks = function(drinks) {
    let sum = 0;
    for (let i = 0; i < drinks.length; i++) {
        document.write("Type: " + drinks[i].type + "&nbsp&nbspSize: " + drinks[i].size + (drinks[i].type == "tea" ? ("&nbsp&nbspColor: " + drinks[i].color) : "") + "&nbsp&nbspPrice: " + drinks[i].price + "<br>");
        sum += drinks[i].price;
    }
    document.write("Summary price: " + sum);
}

// Run program
run();