function addBudget(){
    let budgetType = document.getElementById('budgetType').value;
    let budgetDescription = document.getElementById('description').value;
    let budgetAmount = document.getElementById('amount').value;

    if(budgetType == '' || budgetDescription == '' || budgetAmount == '' ){
        alert('Check empty fields');
        return;
    }
    else{
        if (budgetType == '-') {
            addExpense(budgetDescription, budgetAmount);
            listExpenses();
        }
        else if (budgetType == '+'){
            addIncome(budgetDescription, budgetAmount);
            listIncomes();
        }
        calculateBudget();
    }
}

function listIncomes(){
    let tableIncomes = document.getElementById('tb_incomes');
    let trIncomes = document.createElement('tr');
    //let trExpenses = document.getElementById('tr_expenses');

    //for(let i = 0; i < incomes.length; i++){
        let tdIncomesDescription = document.createElement('td');
        let tdIncomesAmount = document.createElement('td');

        tdIncomesDescription.appendChild(document.createTextNode(incomes[incomes.length-1].description));
        trIncomes.appendChild(tdIncomesDescription);

        tdIncomesAmount.appendChild(document.createTextNode(incomes[incomes.length-1].amount));
        trIncomes.appendChild(tdIncomesAmount);
    //}

    tableIncomes.appendChild(trIncomes);
}

function listExpenses(){
    let tableExpenses = document.getElementById('tb_expenses');
    let trExpenses = document.createElement('tr');

    let tdExpensesDescription = document.createElement('td');
    let tdExpensesAmount = document.createElement('td');

    tdExpensesDescription.appendChild(document.createTextNode(expenses[expenses.length-1].description));
    trExpenses.appendChild(tdExpensesDescription);

    tdExpensesAmount.appendChild(document.createTextNode(expenses[expenses.length-1].amount));
    trExpenses.appendChild(tdExpensesAmount);

    tableExpenses.appendChild(trExpenses);
}

function calculateBudget(){
    document.getElementById('totalBudget').innerHTML = totalBudget();
    document.getElementById('totalExpense').innerHTML = totalExpenses();
    document.getElementById('totalIncome').innerHTML = totalIncomes();
}