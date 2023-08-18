//import Cliente from '/Person';
class Customer extends Person{

    constructor(personId, name, lastName, age, customerId, registrationDate){
        super(personId, name, lastName, age);
        this._customerId = customerId;
        this._registrationDate = registrationDate;
    }

    get customerId(){
        return this._customerId;
    }
    set customerId(customerId){
        this._customerId = customerId;
    }

    get registrationDate(){
        return this._registrationDate;
    }
    set registrationDate(registrationDate){
        this._registrationDate = registrationDate;
    }

    toString(){
        return super.toString + ' ' + this.customerId + ' ' + this.registrationDate
    }
}

