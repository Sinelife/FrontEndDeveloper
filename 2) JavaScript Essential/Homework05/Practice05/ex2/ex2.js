// Ex2
document.write("EX 2<br>");

// Creating object house
let house = {
    floorNum: 3,
    flatNum: 7,
    address: "Address1",
    addFlats: function(n) {
        this.flatNum += n;
        if (n > 3) {
            this.floorNum++;
        }
    }
}

// Function for outputing object house
let output = function(house) {
    document.write("floorNum: " + house.floorNum + "<br>");
    document.write("flatNum: " + house.flatNum + "<br>");
    document.write("address: " + house.address + "<br><br>");
}

// Outputing house info and adding new flats in house
output(house);
house.addFlats(2);
output(house);
house.addFlats(7);
output(house);
house.addFlats(4);
output(house);