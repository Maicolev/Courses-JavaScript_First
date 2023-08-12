class Mouse extends InputDevices{

    static mouseCount = 0;

    constructor(typeInput, brand){
        super(typeInput, brand);
        this._idMouse = ++ Mouse.mouseCount;
    }

    get idMouse(){
        return this._idMouse;
    }

    toString(){
        return this.idMouse + ' ' + super.toString();
    }
}