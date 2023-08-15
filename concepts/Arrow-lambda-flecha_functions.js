//Original
let myFunction = function (){
    console.log('Hi');
}
const myFunction2 = () => {
    console.log('Hi');
}
const myFunction3 = () => console.log('Hi');


//Return
const greet = () => {
    return 'Hi';
}
const greet2 = () => 'Hi';
const returnObject = () => ({name: 'Alex', lastname: 'Alba'});


//Parameter
const functionWithClassicParameter = function(message){
    console.log(message);
}

//const functionWithParameter2 (message) => console.log(message);
const functionWitParameter2 = message => console.log(message);

//const functionWithManyParameters = (op1, op2) => op1 + op2;
const functionWithManyParameters = (op1, op2) => {
    let result = op1 + op2;
    return 'Result: ' + result
}


