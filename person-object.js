class Person{

    static count = 0;

    static get MAX_OBJ(){
        return 4;
    }
    _mail;
    _email = 'test@default.value';

    constructor(name,lastname){

        if(Person.count<Person.MAX_OBJ){
            Person.count++;
            this._name = name;
            this._lastname = lastname;
        }
        else{
            console.log('Maximum objects limit');
            return;
        }
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get lastname(){
        return this._lastname;
    }

    set lastname(lastname){
        this._lastname = lastname;
    }

    fullName(){
        return this._name + ' ' + this._lastname;
    }

    toString(){
        return this.fullName();
    }

    static hellow(){
        console.log('Hi this is a static method');
    }

    static hellow2(person){
        console.log(person.name);
    }
}

let person = new Person('NameTest', 'LastNameTest');


console.log(person.toString());
console.log(person.fullName());

class Employee extends Person{

    constructor (name, lastName, jobArea){
        super(name, lastName);
        this._jobArea = jobArea;
    }

    get jobArea(){
        return this._jobArea;
    }

    set jobArea(jobArea){
        this._jobArea = jobArea;
    }

    fullName(){
        return super.fullName() + ' ' + this._jobArea;
    }

    toString(){
        return this.fullName();
    }
}

let employee = new Employee('NameTest', 'LastNameTest', 'JobAreaTest');

console.log(employee.toString());
console.log(employee.fullName());

Person.hellow();
Person.hellow2(person);
Employee.hellow2(employee);
console.log(Employee.count);

person._mail = 'test@mail.com';
console.log(person._mail);
console.log(person._email);

let person3 = new Person('Carolina', 'Yurgen');
console.log(Employee.count);

let person4 = new Person('Junior', 'Alquelaifi');
console.log(Employee.count);

let person5 = new Person('Junior', 'Alquelaifi');
console.log(Employee.count);

console.log(person5.lastname);