
function myFunction1 (parameter1, parameter2, callbackFunction){
    let result = parameter1 + parameter2;
    callbackFunction(result);
}
function print (message){
    console.log(message);
}

//myFunction1(5,7,print);


//Asynchronous
function myFunctionCallBack(){
    console.log('End my functionCallback');
}
function other(){
    console.log('Start other function');
    console.log('Call myFunctionCallback');
    setTimeout(myFunctionCallBack,10000);
    console.log('Other message');
}
//other();

//set interval
const clock  = () => {
    let date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}
//setInterval(clock,1000);


