let myPromise = new Promise ((resolved, reject) => {
    let expression = false;

    if(expression) resolved('Correct');
    else reject('Error');
});

//myPromise.then(valor => console.log(valor), error => console.log(error));
myPromise.
then(value => console.log(value))
.catch(error => console.log(error));


let myPromise2 = new Promise((resolved) =>{
    console.log('Start');
    setTimeout( () => resolved('TimeOut'),5000);
    console.log('End');
});
myPromise2
.then(value => console.log(value));


//async -> the method return a promise
async function miFunctionPromise(){
    return 'async function';
}
miFunctionPromise()
.then(value => console.log(value));

//async - await
async function myFunctionPromiseAwait(){
    let myPromise = new Promise ((resolved) => {
        resolved('Promise with await');
    });
    console.log(await myPromise);
}
myFunctionPromiseAwait();

//async - await - timeOut
async function myFunctionPromiseAwaitTimeOut(){
    console.log('start');
    let myPromise = new Promise((resolved) => {
        setTimeout( () => resolved('Promise with await and timeOut'), 5000);
    });
    console.log(await myPromise);
    console.log('end');
}
myFunctionPromiseAwaitTimeOut();

