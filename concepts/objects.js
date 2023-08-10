let person =
{
    name: 'Alberto',
    lastName: 'Cifuentes',
    email: 'aCifuentes@mail.com',
    age: 37,
    fullName: function(){
        return this.name + ' ' + this.lastName;
    },
    addPre: function(title, phoneHome){
        return title + ' ' + this.name + ' ' + this.lastName + ' ' + phoneHome;
    }
}

let person2 = new Object();
person2.name = 'Leidy';
person2.lastName = 'Rivera';
person2.email = 'lRivera@mail.com';
person2.age = 34;


console.log(person.fullName());
console.log(person.name);
console.log(person['lastName']);

// print atributtes with for in
for(properties in person )
{
    console.log(properties);
    console.log(person[properties]);
}

//add new attribute
person.phone = '123123';
person2.phone = '234656';

//delete new attribute
delete person.phone;

let personArray = Object.values(person);
console.log(personArray);

let PersonString = JSON.stringify(person);
console.log(PersonString);


// get and sett

let person3 =
{
    name: 'Alberto',
    lastName: 'Cifuentes',
    email: 'aCifuentes@mail.com',
    age: 37,
    _language: 'US',
    get fullName(){
        return this.name + ' ' + this.lastName;
    },
    get language(){
        return this._language;
    },
    set language(_language){
        this._language = _language.toUpperCase();
    }
}

console.log(person3.language);
person3.language = 'EN';
console.log(person3.language);


// objects ands constructors

function Person (name, lastName, mail)
{
    this.name = name;
    this.lastName = lastName;
    this.mail = mail;
    this.fullName = function(){
        return this.name + ' ' + lastName;
    }
}


let father = new Person('Juan', 'Perez', 'jperez@mail.com');

console.log(father);

//let myObject = new Object();
let myObject ={};

//let myString = new String();
let myString = '';

//let myArray = new Array();
let myArray = [];


//add atributes to object
Person.prototype.address = '23465';


//call arguments into other object
console.log(person.addPre.call(person2,'Sra','Street wark 4 # 56hk'));

let parameterList = ['Ing.', 'Street caverr 5 $ 5-bis', 'next'];
console.log(person.addPre.apply(person2,parameterList));




