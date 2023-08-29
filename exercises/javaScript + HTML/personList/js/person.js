class Person{
    static count = 0;

    constructor(name, lastName){
        this._name = name;
        this._lastName = lastName;
        Person.count++;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    fullName(){
        return this._name + ' ' + this._lastName;
    }
}