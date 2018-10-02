"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car(_name, _edition) {
        var _this = this;
        this._name = _name;
        this._edition = _edition;
        this.drive = function () {
            console.log("I'm driving the car " + _this._name + " " + _this._edition);
        };
        this.break = function () { };
        this.signal = function () { };
    }
    Object.defineProperty(Car.prototype, "name", {
        get: function () { return this._name; },
        set: function (val) {
            if (val.length == 0)
                throw new Error("String cannot be empty");
            this._name = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "edition", {
        get: function () { return this._edition; },
        set: function (val) {
            if (val.length == 0)
                throw new Error("String cannot be empty");
            this._edition = val;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
exports.Car = Car;
