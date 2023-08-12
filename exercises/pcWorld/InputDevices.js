class InputDevices{

    constructor(typeInput, brand){
        this._typeInput = typeInput;
        this._brand = brand;
    }

    get typeInput(){
        return this._typeInput;
    }
    set typeInput(typeInput){
        this._typeInput = typeInput;
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        return this._brand;
    }

    toString(){
        return this._typeInput + ' ' + this._brand;
    }
}