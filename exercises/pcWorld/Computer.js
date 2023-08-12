class Computer{

    static counterComputer = 0;

    constructor(name, monitor, keyboard, mouse){
        this._computerId = ++Computer.counterComputer;
        this._name = name;
        this._monitor = monitor;
        this._keyboard = keyboard;
        this._mouse = mouse;
    }

    get computerId(){
        return this._computerId;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }

    get keyboard(){
        return this._keyboard;
    }
    set keyboard(keyboard){
        this._keyboard = keyboard;
    }

    get mouse(){
        return this._mouse;
    }
    set mouse(mouse){
        this._mouse = mouse;
    }

    toString(){
        return this.computerId + ' '+
        this.name + ' '+
        this.monitor  + ' '+
        this.keyboard  + ' '+
        this.mouse;
    }
}