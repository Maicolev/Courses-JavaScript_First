class Expense{

    static _countExpense = 0;
    constructor(description, amount){
        this._idExpense = Expense._countExpense++;
        this._description = description;
        this._amount = parseInt(amount);
    }

    get idExpense(){
        return this._idExpense;
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