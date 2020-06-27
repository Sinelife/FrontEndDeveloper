// Function-constructor for pizza objects
function Pizza(base, ingredients) {
    this.base = base;
    this.ingredients = ingredients;
}

// Function toString() for pizza objects
Pizza.prototype.toString = function() {
    let res = "Size: " + this.base.size + " &nbsp&nbsp&nbsp&nbsp&nbsp&nbspIngredients: ";
    for (let i = 0; i < this.ingredients.length; i++) {
        res += this.ingredients[i] + (i < this.ingredients.length - 1 ? ", " : "");
    }
    return res + " &nbsp&nbsp&nbsp&nbsp&nbspPrice: " + this.getPrice();
}

// Function which get price of pizza
Pizza.prototype.getPrice = function() {
    return this.getBasePrice() + this.getIngridientsPrice();
}

// Function which get price of pizza base
Pizza.prototype.getBasePrice = function() {
    return this.base.price;
}

// Function which get price of pizza ingredients
Pizza.prototype.getIngridientsPrice = function() {
    let res = 0;
    for (let i = 0; i < this.ingredients.length; i++) {
        res += this.ingredients[i].price * this.base.coefficient;
    }
    return res;
}

// Function-constructor for Ingredient objects(pizza has array of ingredients)
function Ingredient(name, price) {
    this.name = name;
    this.price = price;
}

// Function toString() for ingredient objects
Ingredient.prototype.toString = function() {
    return this.name;
}

// Function-constructor for PizzaBase objects(pizza has one pizza base)
function PizzaBase(size, price, coefficient) {
    this.size = size;
    this.price = price;
    this.coefficient = coefficient;
}

// Array of all available pizaBases
let bases = [
    new PizzaBase("Small", 50, 1), 
    new PizzaBase("Middle", 80, 1.3), 
    new PizzaBase("Large", 100, 1.7), 
    new PizzaBase("ExtraLarge", 120, 2)
];

// Array of all available ingredients
let allIngredients = [
    new Ingredient("Chili", 6),
    new Ingredient("Mushrooms", 13), 
    new Ingredient("Bacon", 15), 
    new Ingredient("Olives", 10), 
    new Ingredient("Cheese", 6), 
    new Ingredient("Tomatoes", 7),
    new Ingredient("Onion", 8),
    new Ingredient("Paperoni", 12)
];


// Function for getting element by id 
let getElementById = function (id){
    return document.getElementById(id);
}

// Add event listener which starts when page loaded
window.addEventListener("load", mainHandler, false);

// Main handler function
function mainHandler() {
    let form = document.forms[0];  //Form 
    let pizzaBasesBlock = getElementById("pizzaBases"); //Block which will have radioButtons with pizzaBases 
    let ingredientsBlock = getElementById("ingredients");//Block which will have checkBoxes with ingredients 
    let pricePart = getElementById("price"); //Block which will show current pizza price
    let pizza;   //current pizza
    let order = []; //order which has all pizzas which was ordered by user

    // Calling function which will create on page pizzaBases and Ingredient from arrays
    createFormInfo();

    // Function which will create on page pizzaBases and Ingredient from arrays
    function createFormInfo() {
        createPizzaBasePart();
        createIngredientPart();
    }

    // Function which will create on page pizzaBases from pizzaBase array
    function createPizzaBasePart() {
        for (let i = 0; i < bases.length; i++) {
            createRadioBlock(bases[i]);
        }
    }

    // Function which will create on page ingredients from ingredient array
    function createIngredientPart() {
        for (let i = 0; i < allIngredients.length; i++) {
            createCheckBoxBlock(allIngredients[i]);
        }
    }

    // Function which will create block which has radioButton and label for it
    function createRadioBlock(base) {
        let radioBlock = document.createElement("div");
        radioBlock.className = "base";
        pizzaBasesBlock.appendChild(radioBlock);
        createRadioButton(base, radioBlock);
        createLabel(base, radioBlock);
    }

    // Function which will create label 
    function createLabel(elem, block) {
        let label = document.createElement("label");
        label.innerHTML = elem.size ? elem.size : elem.name;
        block.appendChild(label);
    }

    // Function which will create radioButton 
    function createRadioButton(base, block) {
        let radio = document.createElement("input");
        radio.type = "radio";
        radio.value = base.size;
        radio.name = "base";
        block.appendChild(radio);
    }

    // Function which will create block which has checkBox and label for it
    function createCheckBoxBlock(ingredient) {
        let checkBoxBlock = document.createElement("div");
        checkBoxBlock.className = "ingredient";
        ingredientsBlock.appendChild(checkBoxBlock);
        createCheckBox(ingredient, checkBoxBlock)
        createLabel(ingredient, checkBoxBlock);
    }

    // Function which will create checkBox
    function createCheckBox(ingredient, block) {
        let checkBox = document.createElement("input");
        checkBox.type = "checkBox";
        checkBox.value = ingredient.name;
        checkBox.name = "ingredient";
        block.appendChild(checkBox);
    }


    // Add event listener which will update pizza price every time when we change base or ingredients
    form.addEventListener("click", handle , false);

 
    // Function-handler which will update pizza price every time when we change base or ingredients
    function handle() {
        pizza = new Pizza(getPizzaBaseFromPage(), getIngredientsFromPage());
        pricePart.innerHTML = "Price: " + pizza.getPrice() + "(Base: " + pizza.getBasePrice() + ", Ingredients: " + pizza.getIngridientsPrice() + ")";
    }

    // Function which get pizzaBase from chosen radioButton
    function getPizzaBaseFromPage() {
        let radioButtons = document.getElementsByName("base");
        for(let i = 0; i < radioButtons.length; i++){
            if(radioButtons[i].checked){
                return getPizzaBaseObjectBySize(radioButtons[i].value);
            }
        }
        return new PizzaBase(undefined, 0, 0);
    }

    // Function which get chosen ingrdeients from chosen checkBoxes
    function getIngredientsFromPage() {
        let checkBoxes = document.getElementsByName("ingredient");
        let chosenIngredients = [];
        for(let i = 0; i < checkBoxes.length; i++){
            if(checkBoxes[i].checked) {
                let elem = getIngredientObjectByName(checkBoxes[i].value);
                chosenIngredients.push(elem);
            }
        }
        return chosenIngredients;
    }

    // Function which get pizza base object by size
    function getPizzaBaseObjectBySize(size) {
        for (let i = 0; i < bases.length; i++) {
            if(size == bases[i].size) {
                return bases[i];
            }
        }
    }

    // Function which get ingredient object by name
    function getIngredientObjectByName(name) {
        for (let i = 0; i < allIngredients.length; i++) {
            if(name == allIngredients[i].name) {
                return allIngredients[i];
            }
        }
    }


    let cart = getElementById("cart"); // Cart element which will have pizzas which were chosen by user
    let summary = getElementById("summary"); //Summary element will contain summary price of all chosen pizzas

    // Add event listener for button which will add pizza to cart
    getElementById("add").addEventListener("click", addButtonHandler , false);
    
    // Function-handler for add button which will add element to cart
    function addButtonHandler() {
        if (pizza.base.size) {
            addCartElem();
        }
        updateOrderSummary();
    }

    // Counter for delete buttons 
    let counter = 0;

    // Function which add button to cart-element
    function addButton(element) {
        let button = document.createElement("input");
        button.type = "button";
        button.value = "X";
        button.number = element.number;
        button.className = "deleteButton";
        button.addEventListener("click", deleteHandler, false);
        cart.insertBefore(button, element);
    }
    
    // Function-handler for deleteButtons
    function deleteHandler(e) {
        deleteCartElem(e.target);
        deletePizzaFromOrder(e.target);
        cart.removeChild(e.target);
        updateOrderSummary();
    }

    // Function which delete cartElement from cart
    function deleteCartElem(button) {
        let cartElements = document.getElementsByClassName("cartElem");
        for (let i = 0; i < cartElements.length; i++) {
            if (button.number == cartElements[i].number) {
                cart.removeChild(cartElements[i]);
                break;
            }
        }
    }

    // Function which delete pizza from order array
    function deletePizzaFromOrder(button) {
        for (let i = 0; i < order.length; i++) {
            if(button.number == order[i].number) {
                order.splice(i, 1);
            }
        }
    }

    // Function which add element to cart
    function addCartElem() {
        let cartElem = document.createElement("div");
        cartElem.innerHTML = pizza;
        cartElem.number = counter;
        cartElem.className = "cartElem";
        cart.insertBefore(cartElem, summary);
        addButton(cartElem);
        pizza.number = counter++;
        order.push(pizza);
    }

    // Function which upate summary price of all pizzas
    function updateOrderSummary() {
        summary.innerHTML = "Summary Price: " + getOrderSummary();
    }

    // Function which get summary price of all pizzas
    function getOrderSummary() {
        let sum = 0;
        for (let i = 0; i < order.length; i++) {
            sum += order[i].getPrice();
        }
        return sum;
    }


    let street = getElementById("street"); //street input
    let houseNum = getElementById("houseNum");//house number input
    let flatNum = getElementById("flatNum");//flat number input
    let phone = getElementById("phone");//phone input
    let erorMessage; //error message

    // Add event listener to form which will submit form info
    document.forms[0].addEventListener("submit", submitHandler , false)

    // Function-handler for submitting form
    function submitHandler(e) {
        erorMessage = "Form is not valid!";
        e.preventDefault();
        if (formIsValid()) {
            alert("You succesfully ordered pizzas. We will call you during 5 minutes!")
        } else {
            alert(getErrorMessage());
        }
    }

    // Function which check if form is valid
    function formIsValid() {
        return addressIsValid() && phoneIsValid() && orderIsNotEmpty();
    }

    // Function which check if address is valid
    function addressIsValid() {
        return streetIsValid() && houseNumIsValid() && flatNumIsValid();
    }

    // Function which check if street is valid
    function streetIsValid() {
        return street.value != "";
    }

    // Function which check if house number is valid
    function houseNumIsValid() {
        let houseRegEx = /[0-9]{1,3}-[A-Z]{1}/;
        return houseNum.value != "" && houseRegEx.test(houseNum.value);
    }

    // Function which check if flat number is valid
    function flatNumIsValid() {
        let flatRegEx = /[0-9]{1,3}/;
        return flatNum.value != "" && flatRegEx.test(flatNum.value);
    }

    // Function which check if phone is valid
    function phoneIsValid() {
        let phoneRegEx = /0[0-9]{9}/;
        return phone.value != "" && phoneRegEx.test(phone.value);
    }

    // Function which check if order is valid(user orderedat least one pizza)
    function orderIsNotEmpty() {
        let summaryPrice = summary.innerHTML.replace("Summary Price: ", "");
        return summaryPrice != 0;
    }

    // Function which add correct text for error message
    function getErrorMessage() {
        if (!streetIsValid()) {
            erorMessage += "\nYou has error in street input."
        }
        if (!houseNumIsValid()) {
            erorMessage += "\nYou has error in house number input."
        }
        if (!flatNumIsValid()) {
            erorMessage += "\nYou has error in flat number input."
        }
        if (!phoneIsValid()) {
            erorMessage += "\nYou has error in phone input."
        }
        if (!orderIsNotEmpty()) {
            erorMessage += "\nYou order is empty. Order at least one pizza."
        }
        return erorMessage;
    }
}