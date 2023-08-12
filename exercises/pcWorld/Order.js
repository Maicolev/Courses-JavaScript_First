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
        for (const computer of this.computers) {
            stringOrder = stringOrder+ '-----' + computer.toString();
        }
        return stringOrder;
    }
}