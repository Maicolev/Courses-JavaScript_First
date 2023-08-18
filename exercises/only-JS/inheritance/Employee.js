//import Cliente from '/Person';
class Employee extends Person{

    constructor(personId, name, lastName, age, employeeId, salary){
        super(personId, name, lastName, age);
        this._employeeId = employeeId;
        this._salary = salary;
    }

    get employeeId(){
        return this._employeeId;
    }
    set employeeId(employeeId){
        this._employeeId = employeeId;
    }

    get salary(){
        return this._salary;
    }
    set salary(salary){
        this._salary = salary;
    }

    toString(){
        return super.toString + ' ' + this.employeeId + ' ' + this.salary
    }
}