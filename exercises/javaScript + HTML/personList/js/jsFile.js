let arr_personList = [];

function listPerson(){
    for (const personi of arr_personList) {
        console.log(personi.fullName());
    }
}

function addPersonHtml(){
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;

    if(name != '' && lastName != ''){
        addPersonList(name, lastName);
        addPersonChild();
        //initAllElements();
    }
    else
        alert("Field empty");
}

function addPersonList(name, lastName){
    let newPerson = new Person(name, lastName);
    arr_personList.push(newPerson);
}

function addPersonChild(){

    //if(arr_personList.length == 0){
    let divArray = document.getElementById('div_array');
    let ul = document.getElementById('ul_array');
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(arr_personList[arr_personList.length -1].fullName())); // Agregamos el contenido al elemento li
    ul.appendChild(li); // Agregamos el elemento li a la lista ul

    divArray.appendChild(ul);
    //}
}

function initAllElements(){

    let personCreate = new Person('Cristian', 'ulloa');
    arr_personList.push(personCreate);
    addPersonList('David', 'Hoyos');

    let divArray = document.getElementById('div_array');
    let ul = document.createElement('ul');

    for (let i = 0; i < arr_personList.length; i++) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(arr_personList[i].fullName())); // Agregamos el contenido al elemento li
        ul.appendChild(li); // Agregamos el elemento li a la lista ul
    }
    divArray.appendChild(ul);
}