function calculateBudget(){ // se deberia llamar inicializar data
    document.getElementById('totalBudget').innerHTML = totalBudget();
    document.getElementById('totalExpense').innerHTML = totalExpenses();
    document.getElementById('totalIncome').innerHTML = totalIncomes();
}

function addBudget(){
    let budgetType = document.getElementById('budgetType').value;
    let budgetDescription = document.getElementById('description').value;
    let budgetAmount = document.getElementById('amount').value;

    alert(budgetDescription);
    if (budgetType == '-') {
        addExpense(budgetDescription, budgetAmount);
    }
    else if (budgetType == '+'){
        addIncome(budgetDescription, budgetAmount);
    }

    calculateBudget();
}