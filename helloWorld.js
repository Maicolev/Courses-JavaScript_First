var count = 1;

console.log(count);

console.log('hellow world');



//Data type string
var name = "Carlos";
console.log(typeof name);

name = 10.5;
console.log(typeof name);

//Data type number
var numero = 1000;
console.log(numero);

//Data type object
var objecto = {
    name: "Juan",
    lastname: "Perez",
    telefono: "55443322"
}
console.log(typeof objecto);

//Data type boolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Data type function
function miFuncion() { }
console.log(typeof miFuncion);

//Data type Symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Type clase is a function
class Persona {
    constructor(name, lastname) {
        this.name = name;
        this.lastname = lastname;
    }
}
console.log(typeof Persona);

//Type undefined
var x;
console.log(typeof x);

x = undefined;
console.log(typeof x);

//null
var y = null;
console.log(typeof y);

//array on JavaScript
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//empty string
var z = '';
console.log(z);
console.log(typeof z);

var names = 'Juan';
var lastname = 'Perez';

var fullName = names + ' ' + lastname;
console.log(fullName);

var fullName2 = 'Carlos' + ' ' + 'Lara';
console.log(fullName2);

var x = names + 2 + 4;
console.log(x);

x = names + (2 + 4);
console.log(x);

x = 2 + 4 + names;
console.log(x);