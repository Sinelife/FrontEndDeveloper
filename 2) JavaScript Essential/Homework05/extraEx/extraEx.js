// Creating object Manager using initialization block
let manager = {
    name : "John",
    surname: "Black",
    age: 33,
    gender: "male",
    yearExperience: 7.5,
    company: "Google"
};

// Creating object Secretary using constructor Object()
let secretary = new Object();
secretary.name = "Anna";
secretary.surname = "White";
secretary.age = 24;
secretary.gender = "female";
secretary.yearExperience = 1;

// Output manager
document.write("Manager - " + manager.name + " " + manager.surname + " (age: " + manager.age + ", gender: " +manager.gender + ", yearExperince: " + manager.yearExperience + ", company: " + manager.company + ")<br>");

// Output secretary
document.write("Secretary - " + secretary.name + " " + secretary.surname + " (age: " + secretary.age + ", gender: " + secretary.gender + ", yearExperince: " + secretary.yearExperience + ")");
