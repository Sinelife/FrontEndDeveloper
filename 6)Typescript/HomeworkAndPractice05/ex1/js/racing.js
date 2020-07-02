export class Racing {
    constructor() {
        this._racing = [];
    }
    getCar(name) {
        for (const car of this.racing) {
            if (car.name == name) {
                return true;
            }
        }
    }
    addCar(car) {
        if (!this.raceHasThisCar(car)) {
            this.racing.push(car);
        }
    }
    raceHasThisCar(otherCar) {
        for (const car of this.racing) {
            if (car.name == otherCar.name) {
                return true;
            }
        }
        return false;
    }
    get racing() {
        return this._racing;
    }
}
//# sourceMappingURL=racing.js.map