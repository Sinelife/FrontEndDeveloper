import {Car} from './car.js';
import {Racing} from './racing.js';


let race = new Racing();
race.addCar(new Car("Ferrari F8 Tribut"));
race.addCar(new Car("Honda Freed Modulo"));
race.addCar(new Car("Jaguar XJ220"));
race.addCar(new Car("Tesla Model S Performance"));
race.addCar(new Car("Seat Leon FR TGI"));
race.addCar(new Car("Seat Leon FR TGI"));
race.addCar(new Car("Seat Leon FR TGI"));


function getRandomInt(min : number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getAllFaster(cars: Array<Car>): Array<Car> {
    for (let i = 0; i < 10; i++) {
        for (const car of cars) {
            let randomSpeed: number = getRandomInt(15, 30);
            car.faster(randomSpeed);
            console.log(car.name + " has speed " + car.currentSpeed + " now")
        }
        console.log("\n");
    }
    return cars;
}

function getWinner(cars: Array<Car>): Car {
    let winner: Car = cars[0];
    for (const car of cars) {
        if (car.currentSpeed > winner.currentSpeed) {
            winner = car;
        }
    }
    return winner;
}

getAllFaster(race.racing)
console.log("Winner: " + getWinner(race.racing).name);

