const incomes = [];
const expenses = [];

function addIncome(description, amount){
    const newIncome = new Income(description, amount);
    incomes.push(newIncome);
}

function addExpense(description, amount){
    const newExpense = new Expense(description, amount);
    expenses.push(newExpense);
}

function totalIncomes(){

    let total = 0;
    for (const income of incomes) {
        total += income.amount;
    }
    return total;
}

function totalExpenses(){

    let total = 0;
    for (const expense of expenses) {
        total += expense.amount;
    }
    return total;
}

function totalBudget(){
    return totalIncomes() - totalExpenses();
}
/**addIncome('test1', 3999);
addExpense('test2', -3999);
addExpense('test3', -3969);**/
//console.log(incomes);