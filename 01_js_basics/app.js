// console.log("welcome to javascript");

// console.log("I'm a log message");

// console.error("I'm an error message");

// console.warn("I'm a warning message");

// console.info("I'm an info message");

// let student = {
//     name: "Ranjan",
//     age: 27,
//     course: "CSE"
// }

// console.table(student);

// console.table(['apples', 'oranges', 'bananas'])

// function Person(firstName, lastName){
//     this.firstName = firstName;
//     this.LastName = lastName;
// }

// const me = new Person('Mudasir', 'Najar');

// console.table(me);

// const people = [
//     ["Rod", "Johnson", "Developer"],
//     ["Dennis", "Ritchie", "Developer"],
//     ["Larry", "Ellison", "Business Tycoon"]
// ]
// console.table(people);

function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

const rod = new person('Rod', 'johnson');
const dennis = new person('Dennis', 'Ritchie');
const larry = new person('Larry', 'Ellison');

console.table([rod, dennis, larry], ['firstName', 'lastName']);

console.log('Printing the people table')


