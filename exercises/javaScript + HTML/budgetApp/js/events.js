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

//create table as list incomes
function listIncomes(idIncome){
    let tableIncomes = document.getElementById('tb_incomes');
    let trIncomes = document.createElement('tr');
    let dvIncomes = document.createElement('div');
    let tdButtonIncomes = document.createElement('td');
    let tdButtonIncomes_in = document.createElement('ion-icon');

    dvIncomes.setAttribute('class','elemento_eliminar');

    trIncomes.setAttribute('id','tr_incomes_' + idIncome);
    trIncomes.setAttribute('class','elemento limpiarEstilos');
    trIncomes.addEventListener('mouseover', () => {tdButtonIncomes.removeAttribute('hidden')} , false );
    trIncomes.addEventListener('mouseout', () => {tdButtonIncomes.setAttribute('hidden','hidden');}, false );

    tdButtonIncomes.setAttribute('class', 'elemento_eliminar--btn');
    tdButtonIncomes.setAttribute('hidden','hidden');
    /** tdButtonIncomes.setAttribute('id','td_button_delete_' + idIncome);
    tdButtonIncomes.setAttribute('hidden','hidden');
    tdButtonIncomes.addEventListener('click', (event) => {
        let budgetType = '+'
        let elementId = event.target.id;
        deleteElement(budgetType, elementId);
    } , false); */
    //tdButtonIncomes.appendChild(document.createTextNode('-'));
    tdButtonIncomes_in.setAttribute('name', 'close-circle-outline');
    tdButtonIncomes_in.setAttribute('id','td_button_delete_' + idIncome);
    //tdButtonIncomes_in.setAttribute('hidden','hidden');
    tdButtonIncomes_in.addEventListener('click', (event) => {
        let budgetType = '+'
        let elementId = event.target.id;
        deleteElement(budgetType, elementId);
    } , false);

    tdButtonIncomes.appendChild(tdButtonIncomes_in);
    dvIncomes.appendChild(tdButtonIncomes);
    //trIncomes.appendChild(tdButtonIncomes);

    let tdIncomesDescription = document.createElement('td');
    let tdIncomesAmount = document.createElement('td');

    tdIncomesDescription.setAttribute('class', 'elemento_descripcion');
    tdIncomesDescription.appendChild(document.createTextNode(incomes[incomes.length-1].description));
    trIncomes.appendChild(tdIncomesDescription);

    tdIncomesAmount.setAttribute('class', 'elemento_valor');
    tdIncomesAmount.appendChild(document.createTextNode(currencyFormat(incomes[incomes.length-1].amount)));
    tdIncomesAmount.appendChild(dvIncomes);
    trIncomes.appendChild(tdIncomesAmount);

    tableIncomes.appendChild(trIncomes);
}

//create table as list expenses
function listExpenses(idExpense){
    let indexExpense = expenses.findIndex(element => element.idExpense === idExpense);

    let tableExpenses = document.getElementById('tb_expenses');
    let trExpenses = document.createElement('tr');
    let dvExpenses = document.createElement('div');
    let dvPercent = document.createElement('div');
    let tdButtonExpenses = document.createElement('td');
    let tdButtonExpenses_in = document.createElement('ion-icon');

    dvExpenses.setAttribute('class','elemento_eliminar');
    dvPercent.setAttribute('class','elemento_porcentaje');
    dvPercent.setAttribute('id','elemento_porcentaje_'+ idExpense);

    trExpenses.setAttribute('id','tr_expenses_' + idExpense);
    trExpenses.setAttribute('class','elemento limpiarEstilos');
    trExpenses.addEventListener('mouseover', () =>{tdButtonExpenses.removeAttribute('hidden')} , false );
    trExpenses.addEventListener('mouseout', () => {tdButtonExpenses.setAttribute('hidden','hidden');}, false );

    tdButtonExpenses.setAttribute('class', 'elemento_eliminar--btn');
    tdButtonExpenses.setAttribute('hidden','hidden');

    tdButtonExpenses_in.setAttribute('name', 'close-circle-outline');
    tdButtonExpenses_in.setAttribute('id','td_button_delete_' +  idExpense);
    tdButtonExpenses_in.addEventListener('click', (event) => {
        let budgetType = '-'
        let elementId = event.target.id;
        deleteElement(budgetType, elementId);
    } , false);

    tdButtonExpenses.appendChild(tdButtonExpenses_in);
    dvExpenses.appendChild(tdButtonExpenses);

    let tdExpensesDescription = document.createElement('td');
    let tdExpensesAmount = document.createElement('td');

    tdExpensesDescription.setAttribute('class', 'elemento_descripcion');
    tdExpensesDescription.appendChild(document.createTextNode(expenses[indexExpense].description));
    trExpenses.appendChild(tdExpensesDescription);

    tdExpensesAmount.setAttribute('class', 'elemento_valor');
    tdExpensesAmount.appendChild(document.createTextNode(currencyFormat(expenses[indexExpense].amount)));
    dvPercent.textContent = percentFormat(calculatePercentPerExpense(expenses[indexExpense].amount));
    tdExpensesAmount.appendChild(dvPercent);
    tdExpensesAmount.appendChild(dvExpenses);
    trExpenses.appendChild(tdExpensesAmount);

    tableExpenses.appendChild(trExpenses);
}

function calculateBudget(){
    document.getElementById('totalBudget').innerHTML = currencyFormat(totalBudget());
    document.getElementById('totalExpense').innerHTML = currencyFormat(totalExpenses());
    document.getElementById('totalIncome').innerHTML = currencyFormat(totalIncomes());
    document.getElementById('totalPercentage').innerHTML = percentFormat(totalPercentage());
    refreshPercentPerExpense();
}

//delete list elements (budget and tr)
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

function calculatePercentPerExpense (expense){
    return percentFormat(expense/totalIncomes());
}

//format functions
const currencyFormat = (value)  =>{
    return value.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

const percentFormat = (value)  =>{
    return value.toLocaleString('en-US', {style:'percent', minimumFractionDigits:1});
}

const refreshPercentPerExpense = () => {
    let newPercent ;

    for (const expense of expenses) {
        newPercent = percentFormat(calculatePercentPerExpense(expense.amount));
        document.getElementById('elemento_porcentaje_'+expense.idExpense).innerHTML = newPercent ;
    }
   /** for (let index = 0; index < expenses.length; index++) {
        console.log('-------------------index-------------');
        console.log(index);
        console.log('-------------------expenses-------------');
        console.log(expenses[index].idExpense +' ' + expenses[index].description);
        newPercent = percentFormat(calculatePercentPerExpense(expenses[index].amount));
        document.getElementById('elemento_porcentaje_'+expenses[index].idExpense).innerHTML = newPercent ;

    } */
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


    /** for (const expense of expenses) {
        console.log(expense.idExpense +' ' + expense.description);
        newPercent = percentFormat(calculatePercentPerExpense(expense.amount));
        document.getElementById('elemento_porcentaje_'+expense.idExpense).innerHTML = newPercent ;
    } **/
