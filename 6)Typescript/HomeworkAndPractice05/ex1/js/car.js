export class Car {
    constructor(name) {
        this._currentSpeed = 0;
        this.maxSpeed = 320;
        this.name = name;
    }
    faster(speed) {
        this._currentSpeed += (speed == undefined) ? 5 : speed;
        if (this._currentSpeed > this.maxSpeed) {
            this._currentSpeed = this.maxSpeed;
        }
    }
    slower(speed) {
        this._currentSpeed -= (speed == undefined) ? 5 : speed;
        if (this._currentSpeed < 0) {
            this._currentSpeed = 0;
        }
    }
    stop() {
        this._currentSpeed -= 5;
        if (this._currentSpeed < 0) {
            this._currentSpeed = 0;
        }
    }
    get currentSpeed() {
        return this._currentSpeed;
    }
}
//# sourceMappingURL=car.js.map