// Constructor-function of University objects
function University(name, country, studentNum) {
    this.name = name;
    this.country = country;
    this.sudentNum = studentNum;
}

// Constructor-function of Students objects
function Student(name, surname, age, marks, university) {
    // Instance-level properties
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.marks = marks;
    this.university = university;
    // Instance-level-method for getting average mark of student
    this.getAverageMark = function() { 
        let res = 0;
        for (let i = 0; i < this.marks.length; i++) {
            res += this.marks[i];
        }
        return res / this.marks.length;
    }
}

// Constructor-function-level property planet
Student.planet = "Earth";

// Constructor-function-level method which check if 2 students studying in the same university
Student.isInSameUniversity = function(student1, student2) { 
    return student1.university.name == student2.university.name;
}

// Method valueOf()
Student.prototype.valueOf = function() {
    return this.name + " " + this.surname;
}

// Method toString()
Student.prototype.toString = function() {
    return this.name + " " + this.surname + " (age: " + this.age + ", marks - [" + this.marks + "], university - " + this.university.name + ") planet: ";
}

// Creating university objects
let naukma = new University("NaUKMA", "Ukraine", 3_500);
let kpi = new University("KPI", "Ukraine", 36_000);

// Creating student objects
let ivan = new Student("Ivan", "Ivanov", 19, [88, 89, 93, 77, 82], kpi);
let andrey = new Student("Andrey", "Andreev", 20, [77, 77, 61, 62, 63, 64, 65, 67], kpi);
let alina = new Student("Alina", "Petrova", 21, [98, 92, 90, 89, 86, 100], naukma);
let marina = new Student("Marina", "Fedotova", 17, [77, 88, 99, 100, 61, 73], naukma);

// Examples of using toString() method on students
document.write("<h2>toString() examples of students</h2>");
document.write(ivan.toString() + "<br>");
document.write(andrey.toString() + "<br>");
document.write(alina.toString() + "<br>");
document.write(marina.toString() + "<br>");

// Examples of using getAverage() method on students
document.write("<hr><h2>averageMark() examples of students</h2>");
document.write("Average mark of " + ivan + " = " + ivan.getAverageMark() + "<br>");
document.write("Average mark of " + andrey + " = " + andrey.getAverageMark() + "<br>");
document.write("Average mark of " + alina + " = " + alina.getAverageMark() + "<br>");
document.write("Average mark of " + marina + " = " + marina.getAverageMark() + "<br>");

// Examples of using isInSameUniversity() method on students(and valueOf())
document.write("<hr><h2>isInSameUniversity() examples of students</h2>");
document.write("Is " + alina + " and " + ivan + " in same univerity? - " + Student.isInSameUniversity(ivan, alina) + "<br>");
document.write("Is " + alina + " and " + marina + " in same univerity? - " + Student.isInSameUniversity(marina, alina) + "<br>");
document.write("Is " + ivan + " and " + andrey + " in same univerity? - " + Student.isInSameUniversity(ivan, andrey) + "<br>");
