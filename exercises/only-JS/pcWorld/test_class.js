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

class Monitor{

    static monitorCount = 0;

    constructor(brand, size){
        this._idMonitor = ++ Monitor.monitorCount;
        this._brand = brand;
        this._size = size;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get brand(){
        return this._brand;
    }
    set brand(brand){
        this._brand = brand;
    }

    get size(){
        return this._size;
    }
    set size(size){
        this._size = size;
    }

    toString(){
        return  this.idMonitor + ' ' +
        this.brand  + ' ' +
        this.size;
    }
}

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

class Order{

    static orderCount = 0;
    constructor(){
        this._orderId = ++Order.orderCount;
        this._computers = [];
    }

    get computers(){
       return  this._computers;
    }

    get orderId(){
        return this._orderId;
    }

    addComputers(computer){
        this._computers.push(computer);
    }

    showOrder(){
        let stringOrder = '';
        //return this.computers;
        for (const computer of this.computers) {
            stringOrder = stringOrder+ '-----' + computer.toString();
        }
        //return this.computers[number];
        return stringOrder;
    }
}

let mouse = new Mouse('Mouse', 'Asus');
let keyboard = new Keyboard('Keyboard','Logitech');
let monitor = new Monitor('Huawei', '34p');
let computer = new Computer('Pc - gamer', monitor, keyboard, mouse);
let computer2 = new Computer('Pc - gamers', monitor, keyboard, mouse);
let order = new Order();
order.addComputers(computer);
order.addComputers(computer2);

console.log(order.showOrder());

console.log(computer.toString());
