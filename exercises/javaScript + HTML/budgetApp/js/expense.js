class Expense{

    static _idExpense = 0;
    constructor(description, amount){
        Expense._idExpense++;
        this._description = description;
        this._amount = parseInt(amount);
    }

    get idExpense(){
        return Expense._idExpense;
    }

    get description(){
        return this._description;
    }
    set description(description){
        this._description = description;
    }

    get amount(){
        return this._amount;
    }
    set amount(amount){
        this._amount = amount;
    }
}

//let es = new Expense('test', 1000);
//console.log(es.idExpense);