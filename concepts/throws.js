'use strict'
let result = 's';

try{
    if(isNaN(result)) throw 'Is not a number';
    else if (result === '') throw 'Empty string';
    else if (result >= 0) throw 'Positive value';
    else if (result < 0) throw 'Negative value';
}
catch(error){
    console.log(error);
}
finally{
    console.log('end errors review');
}