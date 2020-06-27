// Function-constructor for creature objects
function Creature(name, age, weapon, isMagician) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.isMagician = isMagician;
}

// Function-constructor for human objects(Dwarf is child for Creature)
function Dwarf(name, age, weapon, isMagician) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.isMagician = isMagician;
}

// Function-constructor for human objects(Human is child for Creature)
function Human(name, age, weapon, isMagician, clanName) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.isMagician = isMagician;
    this.clanName = clanName;
}

// Function-constructor for demon objects(Demon is child for Creature)
function Demon(name, age, weapon, isMagician, demonRace) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.isMagician = isMagician;
    this.demonRace = demonRace;
}

// Function-constructor for elf objects(Elf is child for Creature)
function Elf(name, age, weapon, isMagician, elfType) {
    this.name = name;
    this.age = age;
    this.weapon = weapon;
    this.isMagician = isMagician;
    this.elfType = elfType;
}

// Function-constructor for weapon objects
function Weapon(type, rarity) {
    this.type = type;
    this.rarity = rarity;
}

// Connect Human, Elf and Demon with Creature to make them childs for Creature
Human.prototype = new Creature();
Elf.prototype = new Creature();
Demon.prototype = new Creature();
Dwarf.prototype = new Creature();

// Creating function-constructor-level property which chose with which color will output race of Creature
Human.raceSignColor = "blue";
Elf.raceSignColor = "green";
Demon.raceSignColor = "red";

// toString() method for Creature
// !! Because of Dwarf doesn't have it own toString() method it will use toString() of his parent Creature !!
Creature.prototype.toString = function() {
    return "<div>Creature " + this.name + "</div>(age: " + this.age + ", " + (this.isMagician ? "magician" : "no-mage") + ", weapon: " + this.weapon + ")<br><br>";
}

// toString() method for Human
Human.prototype.toString = function() {
    return "<div><font color=" + Human.raceSignColor + ">" + this.name + " " + this.clanName + "</font></div> (age: " + this.age + ", " + (this.isMagician ? "magician" : "no-mage") + ", weapon: " + this.weapon + ")<br><br>";
}

// toString() method for Elf
Elf.prototype.toString = function() {
    return "<div><font color=" + Elf.raceSignColor + ">" + this.name + "</font></div> (age: " + this.age + ", " + (this.isMagician ? "magician" : "no-mage") + ", weapon: " + this.weapon + ")<br><br>";
}

// toString() method for Demon
Demon.prototype.toString = function() {
    return "<div><font color=" + Demon.raceSignColor + ">" + this.demonRace + " " + this.name + "</font></div> (age: " + this.age + ", " + (this.isMagician ? "magician" : "no-mage") + ", weapon: " + this.weapon + ")<br><br>";
}

// toString() method for Weapon
Weapon.prototype.toString = function() {
    return this.rarity + " " + this.type ;
}


// Creating different creatures(humans, elves and demons)
let bron = new Human("Bron", 44, new Weapon("sword", "rare"), false, "Blackhorne");
let lotar = new Human("Lotar", 77, new Weapon("stick", "legendary"), false, "Winter");
let solomiel = new Elf("Solomiel", 1899, new Weapon("Stick", "legendary"), true, "Wood elf");
let arkan = new Elf("Arkan", 877, new Weapon("dagger", "rare"), false, "Dark elf");
let asmodeus = new Demon("Asmodeus", 4333, new Weapon("sword", "ancient-legendary"), true, "Archdevil");
let astaroth = new Demon("Astaroth", 4122, new Weapon("axe", "ancient-legendary"), true, "Archdevil");
let baltazar = new Demon("Baltazar", 1233, new Weapon("spear", "rare"), false, "Archdemon");
let torin = new Dwarf("Torin", 190, new Weapon("axe", "ordinary"), false);
let morok = new Dwarf("Morok", 412, new Weapon("axe", "legendary"), true);

// Put all creatures in array
let array = [baltazar, lotar, arkan, astaroth, solomiel, asmodeus, bron, morok, torin];

// Outputing all creatures from array
for (let i = 0; i < array.length; i++) {
    document.write(array[i]);
}