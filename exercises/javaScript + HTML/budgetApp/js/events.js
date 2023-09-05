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
            listExpenses(addExpense(budgetDescription, budgetAmount));
        }
        else if (budgetType == '+'){
            listIncomes(addIncome(budgetDescription, budgetAmount));
        }
        calculateBudget();
    }
}

function listIncomes(idIncome){
    let tableIncomes = document.getElementById('tb_incomes');
    let trIncomes = document.createElement('tr');
    let tdButtonIncomes = document.createElement('td');

    trIncomes.setAttribute('id','tr_incomes_' + idIncome);
    trIncomes.addEventListener('mouseover', () => {tdButtonIncomes.removeAttribute('hidden')} , false );
    trIncomes.addEventListener('mouseout', () => {tdButtonIncomes.setAttribute('hidden','hidden');}, false );

    tdButtonIncomes.appendChild(document.createTextNode('-'));
    tdButtonIncomes.setAttribute('id','td_button_delete_' + idIncome);
    tdButtonIncomes.setAttribute('hidden','hidden');
    tdButtonIncomes.addEventListener('click', (event) => {
        let budgetType = '+'
        let elementId = event.target.id;
        deleteElement(budgetType, elementId);
    } , false);

    trIncomes.appendChild(tdButtonIncomes);

    let tdIncomesDescription = document.createElement('td');
    let tdIncomesAmount = document.createElement('td');

    tdIncomesDescription.appendChild(document.createTextNode(incomes[incomes.length-1].description));
    trIncomes.appendChild(tdIncomesDescription);

    tdIncomesAmount.appendChild(document.createTextNode(incomes[incomes.length-1].amount));
    trIncomes.appendChild(tdIncomesAmount);

    tableIncomes.appendChild(trIncomes);
}

function listExpenses(idExpense){
    let tableExpenses = document.getElementById('tb_expenses');
    let trExpenses = document.createElement('tr');
    let tdButtonExpenses = document.createElement('td');

    trExpenses.setAttribute('id','tr_expenses_' + idExpense);
    trExpenses.addEventListener('mouseover', () =>{tdButtonExpenses.removeAttribute('hidden')} , false );
    trExpenses.addEventListener('mouseout', () => {tdButtonExpenses.setAttribute('hidden','hidden');}, false );

    tdButtonExpenses.appendChild(document.createTextNode('-'));
    tdButtonExpenses.setAttribute('id','td_button_delete_' +  idExpense);
    tdButtonExpenses.setAttribute('hidden','hidden');
    tdButtonExpenses.addEventListener('click', (event) => {
        let budgetType = '-'
        let elementId = event.target.id;
        deleteElement(budgetType, elementId);
    } , false);
    trExpenses.appendChild(tdButtonExpenses);

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
    document.getElementById('totalPercentage').innerHTML = totalPercentage();
}

function deleteElement(budgetType, elementId){
    let id = getOnlyId(elementId);
    deleteBudget(budgetType,id);
    deleteTr(budgetType,id);
    calculateBudget();
}

function getOnlyId(elementId){
    return number = elementId.match(/\d+/);
}

function deleteBudget(budgetType, id){
    if (budgetType == '+'){
        const index = incomes.findIndex(income => income.id === id);
        incomes.splice(index, 1);
    }
    else if(budgetType == '-'){
        const index = expenses.findIndex(expense => expense.id === id);
        expenses.splice(index, 1);
    }
}

function deleteTr(budgetType, id){
    let trDelete = budgetType == '+' ? document.getElementById('tr_incomes_'+id) : document.getElementById('tr_expenses_'+id);
    let table = trDelete.parentNode;
    table.removeChild(trDelete);
}
//function showButtonTr(buttonElement){
    //let tdButtonExpenses = document.getElementById('td_button_delete' + countButtonExpenses);
    //buttonElement.removeAttribute('hidden');
   /** let tableExpenses = document.getElementById('tb_expenses');
    let trExpenses = document.getElementById('tr_expenses');
    let tdButtonExpenses = document.createElement('td');

    tdButtonExpenses.appendChild(document.createTextNode('-'));
    trExpenses.appendChild(tdButtonExpenses);

    tableExpenses.appendChild(trExpenses);
    */
//}

// 1. falta poner el boton de eliminar en incomes
// 2. falta calcular el porcentaje de los egresos totales en relacion a los ingresos totales
// 3. falta poner a funcionar el botón de eliminar