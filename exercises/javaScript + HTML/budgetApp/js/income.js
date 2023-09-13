class Income{

    static _countIncome = 0;
    constructor(description, amount){
        this._idIncome = Income._countIncome++;
        this._description = description;
        this._amount = parseInt(amount);
    }

    get idIncome(){
        return this._idIncome;
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