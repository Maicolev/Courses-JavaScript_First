class Person{

    static _personCount = 0;

    constructor (personId, name, lastName, age){
        Person._personCount++;
        this._personId = personId;
        this._name = name;
        this._lastName = lastName;
        this._age = age;
    }

    get personId(){
        return this._personId;
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

    get age(){
        return this._age;
    }
    set age(age){
        this._age = age;
    }

    get toString(){
        return this.personId + ' ' + this.name + ' ' + this.lastName + ' ' + this.age;
    }
}