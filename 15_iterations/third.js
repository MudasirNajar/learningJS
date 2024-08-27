// const myObject = {
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by app"
// }

// for (const key in myObject) {
//   console.log(myObject[key]);
// }

// for (const key in myObject) {
//     console.log(`${key} is the shortcut for: ${myObject[key]}`);
// }



// const languages = ["Java", "JS", "Ruby", "TypeScript", "Scala"];

// languages.forEach(function (language) {
//     console.log(language);
// });


// function printMe(value) {
//     console.log(value);
// }

// languages.forEach(printMe);


// languages.forEach((language, index, languages) => {
//     console.log(language, index, languages);
// });


// const codingLangs = [
//     {
//         languageName: "Java",
//         extension: ".java"
//     },
//     {
//         languageName: "Python",
//         extension: ".py"
//     },
//     {
//         languageName: "JavaScript",
//         extension: ".js"
//     },
// ]

// codingLangs.forEach((language) => {
//     console.log(language.extension);
// })




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNumbers = numbers.filter((num) => num > 4);
// console.log(newNumbers);


// const even = numbers.filter((num) => num % 2 == 0);
// console.log(even);


// const newNumbers = numbers.map((num) => num + 10);
// console.log(newNumbers);




// const numbers = [1, 2, 3];
// const total = numbers.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} & currVal: ${currVal}`);
//     return acc + currVal;
// }, 0);
// console.log(total);

// const total = numbers.reduce((acc, currVal) => (acc + currVal), 0);
// console.log(total);


const shoppingCart = [
    {
        itemName: "JS course",
        price: 1999
    },
    {
        itemName: "Py course",
        price: 999
    },
    {
        itemName: "Data Science course",
        price: 12999
    },
    {
        itemName: "AI course",
        price: 8999
    }
]


// const prices = [];
// shoppingCart.forEach((order) => {
//     prices.push(order.price)
// });

// const cartTotal = prices.reduce((price1, price2) => (price1 + price2), 0);
// console.log(cartTotal);



const cartTotal = shoppingCart.reduce((acc, order) => (acc + order.price), 0);
console.log(cartTotal);





