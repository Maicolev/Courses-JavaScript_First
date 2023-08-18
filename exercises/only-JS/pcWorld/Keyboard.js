class Keyboard extends InputDevices{

    static keyboardCount = 0;

    constructor(typeInput, brand){
        super(typeInput, brand);
        this._idKeyboard = ++ Keyboard.keyboardCount;
    }

    get idKeyboard(){
        return this._idKeyboard;
    }

    toString(){
        return  this.idKeyboard + ' ' +super.toString();
    }
}