export class Car {    
    constructor(private _name? : string, private _edition? : string) { }
    get name() { return this._name; }
    set name(val) {
        if(val.length == 0)
            throw new Error("String cannot be empty");
        this._name = val;            
    }
    get edition() { return this._edition; }
    set edition(val) {
        if(val.length == 0)
            throw new Error("String cannot be empty");
        this._edition = val;            
    }
    drive = () => {
        console.log("I'm driving the car " + this._name + " " + this._edition);
    }
    break = () => {}
    signal = () => {}
}
