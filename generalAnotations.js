//anotaciones js

//operador ternario
let variable2 = 3<2?true:false;

//funciones de tipo expresion (no tienen nombre)
let variable = function (a,b) {return a+b};

//Funciones de tipo self invoking (no tienen nombre y se llaman a ellas mismas)
(function (a,b)
{
 console.log('ejecutando la funcion: '+ (a+b));
}) (3,4);

//Funciones flecha, son parecidas a las lambda de java
const sumarFuncionTipoFlecha = (a,b) => a +b;


//Se puede settear parametros por defecto y se pueden enviar mas argumentos de los parametros que recibe la funcion

let sumar = function (a=4, b=5)
{
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);

  return a+b+arguments[2];
}


resultado = sumar (3,6,7);
console.log(resultado);