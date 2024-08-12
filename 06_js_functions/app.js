
// function greet() {
//     console.log("Hello");
// }

// greet();

// let greetMe = function () {
//     console.log("Hello");
// }

// greetMe();


// let wishMe = function (name, age) {
//     console.log(`Hello ${name}, you're ${age} years old`);
// }

// wishMe('Mudasir', 31);
// wishMe('Tanveer', 24);
// wishMe();
// wishMe('Supriya');


// function sum(a, b){
//     let result = a + b;
//     return result;
// }

// let output = sum(10, 20);
// console.log(output);


// let printObject = function(obj){
//     console.log(obj);
// }

// printObject({
//     name: 'Dennis Ritchie',
//     knownFor: 'Inventing the C programming language'
// });

// let smartphone = {
//     model: 'iphone 15 pro',
//     price: 125000
// }

// printObject(smartphone);


// let printArray = function (array) {

//     let result = '';
//     for (let index in array) {
//         result += `INDEX: ${index} => VALUE: ${array[index]} \n`;
//     }
//     console.log(result);
// }

// printArray([1, 2, 3]);

// let colours = ['White', 'Silver', 'Green', 'Orange', 'Red'];
// printArray(colours);


// ==> Function inside an object

// let cricketer = {
//     firstName: 'Sachin',
//     lastName: 'Tendulkar',
//     fullName: function () {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// console.log(cricketer.fullName());
// console.log(cricketer);


// ==> Nested function

// let outerFn = function () {
//     console.log(`I'm an outer function`);

//     let innerFn = function () {
//         console.log(`I'm an inner function`);
//     }
//     innerFn();
// }

// outerFn();


// Twisted function

let twistedFn = function () {
    let name = `John`;

    let printStudent = function () {

        let student = {
            name: `Rajan`,
            age: `20`,
            course: `CS`
        }
        return student;
    }
    return printStudent();
}

let result = twistedFn();
console.log(result.name);


// Prepare chicken curry with functions




