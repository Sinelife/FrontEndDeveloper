export interface ICar {
    currentSpeed: number;
    maxSpeed: number;
    name: string;
    faster(speed: number) : void;
    slower(speed: number) : void;
    stop() : void;
}

export class Car implements ICar {
    private _currentSpeed: number;
    maxSpeed: number;
    name: string;

    constructor(name: string) {
        this._currentSpeed = 0;
        this.maxSpeed = 320;
        this.name = name;
    }

    faster(speed?: number) : void {
        this._currentSpeed += (speed == undefined) ? 5 : speed;
        if (this._currentSpeed > this.maxSpeed) {
            this._currentSpeed = this.maxSpeed;
        }
    }

    slower(speed?: number) : void {
        this._currentSpeed -= (speed == undefined) ? 5 : speed;
        if (this._currentSpeed < 0) {
            this._currentSpeed = 0;
        }
    }

    stop() : void {
        this._currentSpeed -= 5;
        if (this._currentSpeed < 0) {
            this._currentSpeed = 0;
        }
    }

    get currentSpeed(): number {
        return this._currentSpeed;
    }
}