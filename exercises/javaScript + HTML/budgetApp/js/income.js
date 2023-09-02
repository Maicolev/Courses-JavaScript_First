class Income{

    static _idIncome = 0;
    constructor(description, amount){
        Income._idIncome++;
        this._description = description;
        this._amount = parseInt(amount);
    }

    get idIncome(){
        return Income._idIncome;
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