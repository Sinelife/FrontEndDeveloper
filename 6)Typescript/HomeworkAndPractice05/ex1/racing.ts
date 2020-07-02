import {Car} from './car.js'

export class Racing {
    private _racing: Array<Car> = [];

    getCar(name: string) {
        for (const car of this.racing) {
            if (car.name == name) {
                return true;
            }
        }
    }

    addCar(car: Car): void {
        if (!this.raceHasThisCar(car)) {
            this.racing.push(car);
        }
    }

    private raceHasThisCar(otherCar: Car) : boolean {
        for (const car of this.racing) {
            if (car.name == otherCar.name) {
                return true;
            }
        }
        return false;
    }

    get racing() : Array<Car> {
        return this._racing;
    }
}