// DictionaryElement class which contains Key, Value and Description of element
class DictionaryElement {
    set key(key) {
        if (key == null || key == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._key = key;
    }
    get key() {
        return this._key;
    }
    set value(value) {
        if (value == null || value == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._value = value;
    }
    get description() {
        return this._description;
    }
    set description(description) {
        if (description == null || description == undefined) {
            throw new Error("Значение value не может быть пустым.");
        }
        this._description = description;
    }
    get value() {
        return this._value;
    }
}
// Dictionary class which has array of DictionaryElement objects
class Dictionary {
    constructor() {
        this.data = [];
    }
    add(key, value, description) {
        let entry = new DictionaryElement();
        entry.key = key;
        entry.value = value;
        entry.description = description;
        this.data.push(entry);
    }
    getValueByKey(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].value;
            }
        }
        return null;
    }
    getDescriptionByValue(value) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].value == value) {
                return this.data[i].description;
            }
        }
        return null;
    }
    getDescriptionByKey(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].description;
            }
        }
        return null;
    }
    getValueAndDescriptionByKey(key) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].key == key) {
                return this.data[i].value + ": " + this.data[i].description;
            }
        }
        return null;
    }
}
// Create and fill dictionary where Key is number, Value is string, Description is string
let dictionary = new Dictionary();
dictionary.add(1, "Encapsulation", "it refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components.");
dictionary.add(2, "Inheritance", "is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation.");
dictionary.add(3, "Polymorphism", "is the provision of a single interface to entities of different types.");
console.log("FIRST EXAMPLE\n");
// Calling method getValueByKey()
console.log(dictionary.getValueByKey(1));
console.log(dictionary.getValueByKey(2));
console.log(dictionary.getValueByKey(3));
console.log("\n");
// Calling method getDescriptionByKey()
console.log(dictionary.getDescriptionByKey(1));
console.log(dictionary.getDescriptionByKey(2));
console.log(dictionary.getDescriptionByKey(3));
console.log("\n");
// Calling method getDescriptionByValue()
console.log(dictionary.getDescriptionByValue("Polymorphism"));
console.log(dictionary.getDescriptionByValue("Encapsulation"));
console.log("\n");
// Calling method getValueAndDescriptionByKey()
console.log(dictionary.getValueAndDescriptionByKey(1));
console.log(dictionary.getValueAndDescriptionByKey(2));
console.log(dictionary.getValueAndDescriptionByKey(3));
console.log("\n");
// Class for description that contains theme if element and it's description
class DetailedDescription {
    constructor(_theme, _description) {
        this._theme = _theme;
        this._description = _description;
        this.toString = () => {
            return "Description(theme = " + this._theme + ", description = " + this._description + ")";
        };
        this._theme = _theme;
        this._description = _description;
    }
}
// Create and fill dictionary where Key is string, Value is string, Description is object of DetailedDescription class(theme: string, description: string)
let otherDictionary = new Dictionary();
otherDictionary.add("#1", "Encapsulation", new DetailedDescription("Programming", "it refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object's components."));
otherDictionary.add("#2", "Inheritance", new DetailedDescription("Programming", "is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation."));
otherDictionary.add("#3", "Polymorphism", new DetailedDescription("Programming", "is the provision of a single interface to entities of different types."));
otherDictionary.add("#4", "Science fiction", new DetailedDescription("Сulture", "is a genre of speculative fiction that typically deals with imaginative and futuristic concepts such as advanced science and technology, space exploration, time travel, parallel universes, and extraterrestrial life."));
otherDictionary.add("#5", "Fantasy", new DetailedDescription("Сulture", "is a genre of speculative fiction set in a fictional universe, often inspired by real world myth and folklore. Its roots are in oral traditions, which then became fantasy literature and drama."));
console.log("\n\n\n\nSECOND EXAMPLE\n");
// Calling method getValueByKey()
console.log(otherDictionary.getValueByKey("#1"));
console.log(otherDictionary.getValueByKey("#3"));
console.log(otherDictionary.getValueByKey("#5"));
console.log("\n");
// Calling method getDescriptionByKey()
console.log(otherDictionary.getDescriptionByKey("#1"));
console.log(otherDictionary.getDescriptionByKey("#3"));
console.log(otherDictionary.getDescriptionByKey("#5"));
console.log("\n");
// Calling method getDescriptionByValue()
console.log(otherDictionary.getDescriptionByValue("Polymorphism"));
console.log(otherDictionary.getDescriptionByValue("Science fiction"));
console.log(otherDictionary.getDescriptionByValue("Fantasy"));
console.log("\n");
// Calling method getValueAndDescriptionByKey()
console.log(otherDictionary.getValueAndDescriptionByKey("#1"));
console.log(otherDictionary.getValueAndDescriptionByKey("#3"));
console.log(otherDictionary.getValueAndDescriptionByKey("#5"));
console.log("\n");
//# sourceMappingURL=ex2.js.map