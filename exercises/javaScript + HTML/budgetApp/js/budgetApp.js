incomes = [];
expenses = [];

function addIncome(description, amount){
    const newIncome = new Income(description, amount);
    incomes.push(newIncome);
}

function addExpense(description, amount){
    const newExpense = new Expense(description, amount);
    expenses.push(newExpense);
}

//addIncome('test', 3999);
//console.log(incomes);