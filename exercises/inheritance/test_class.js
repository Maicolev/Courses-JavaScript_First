import Cliente from './Person';
let person1 = new Person(1, 'Alberto', 'Casanare', 28);
let person2 = new Person(2, 'José', 'Parra', 64);
console.log(person1);
console.log(Person._personCount);
console.log(person2.toString);




let employee = new Employee(1, 'Alberto', 'Casanare', 28, 3, 10000000);
console.log(employee.toString());



let customer1 = new Customer(1, 'Alberto', 'Casanare', 28, 3, new Date('06-06-2022'));
console.log(customer1.toString());