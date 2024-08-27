// let numbers = [10, 20, 30];

// console.log(numbers);
// console.log(numbers[0]);

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }


// let colours = ['white', 'green', 'yellow', 'pink', 'black'];

// let result = '';
// for (let i = 0; i < colours.length; i++) {
//     if (i < colours.length - 1) {
//         result += `${colours[i]}, `;
//     } else {
//         result += `${colours[i]}`;
//     }
// }

// console.log(result);


let colours = ['white', 'green', 'yellow', 'pink', 'black'];

// let result = "";
// for (let index in colours) {
//     result += `${colours[index]} `;
// }

// console.log(result);

// result = "";
// for (let colour of colours) {
//     result += `${colour} `
// }

// console.log(result);

// result = "";
// colours.forEach(function (colour) {
//     result += `${colour} `;
// })

// console.log(result);

// let result = "";
// colours.forEach(colour => result += `${colour} `);
// console.log(result);


let employees = [
    {
        id: 1,
        name: 'Dennis Ritchie',
        age: 33,
        designation: 'Tech Lead',
        isActive: true
    },
    {
        id: 2,
        name: 'Rod Johnson',
        age: 31,
        designation: 'Software Developer',
        isActive: true
    },
    {
        id: 3,
        name: 'Larry Ellison',
        age: 42,
        designation: 'Manager',
        isActive: false
    },
    {
        id: 4,
        name: 'James Gosling',
        age: 26,
        designation: 'Software Developer',
        isActive: false
    }
]


// const softwareDevelopers = employees.filter((employee) => employee.designation == "Software Developer");
// console.log(softwareDevelopers);


// console.log(employees);

// console.log(employees[1]);
// console.log(employees[1].name);
// console.log(employees[3].age);

// let result = "";
// for (let employee of employees) {
//     result += `${employee.name}, `;
// }
// console.log(result);


// let juniorEmployess = [];
// for (let employee of employees) {
//     if (employee.age < 30) {
//         juniorEmployess.push(employee);
//     }
// }

// console.log(juniorEmployess);

// for(let employee of employees){
//     if(employee.id % 2 === 0){
//         employees.pop(employee);
//     }
// }

// console.log(employees);




// let jrEmployess = employees.filter(function (employee) {
//     return employee.age < 40;
// })

// console.log(jrEmployess);


let softwareDevelopers = employees.filter(function (employee) {
    return employee.designation === "Software Developer";
});

console.log(softwareDevelopers);



// let activeEmployess = [];

// for (let employee of employees) {
//     if (employee.isActive) {
//         activeEmployess.push(employee);
//     }
// }
// console.log(activeEmployess);


// let softwareDevelopers = [];
// for (let employee of employees) {
//     if (employee.designation === "Software Developer") {
//         softwareDevelopers.push(employee);
//     }
// }
// console.log(softwareDevelopers);




// ==> Functions of Array
// shift() => remove the first element from Array

let technologies = ["html", "css", "javascript", "bootstrap", "react"];
// console.log(technologies);

// technologies.shift();
// console.log(technologies);

// console.log(technologies[1]);
// technologies.unshift("node js");

// console.log(technologies);
// console.log(technologies[1]);

// let tech = technologies.pop();
// console.log(tech);
// console.log(technologies);

// technologies.push("node js");
// console.log(technologies);


// technologies.sort();
// console.log(technologies);

// technologies.sort().reverse();
// console.log(technologies);


// console.log(technologies[1]);

// let removedTech = technologies.splice(0, 2);
// console.log(technologies);
// console.log(technologies[1]);
// console.log(removedTech);


// technologies.splice(3, 1, "node js");
// console.log(technologies);

// const arr = [1, , 3, 4, , 6];
// console.log(arr.splice(1, 2)); // [empty, 3]
// console.log(arr); // [1, 4, empty, 6]

// let techString = technologies.join("- ");
// console.log(techString);
// let techStringArray = techString.split(" ");
// console.log(techStringArray);


// let numbers = [1, 2, 3, 4];

// console.log(typeof numbers);
// let removedNumber = numbers.splice(0, 1, 99);
// console.log(typeof removedNumber);

// console.log(removedNumber);
// console.log(numbers);








