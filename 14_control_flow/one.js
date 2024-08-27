// const balance = 500;

// if(balance) console.log(`${balance}`);


// **************Truthy**************

// const userEmail = [];

// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }


// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values: "0", 'false', " ", [], {}, function() {} ==> empty function



// const emptyObj = {};
// console.log(emptyObj.length);


// if (Object.keys(emptyObj).length === userEmail.length) {
//     console.log("Don't have user email");
// }



// Nullish Coalescing Operator (??): null undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand 
// is null or undefined, and otherwise returns its left-hand side operand.


// let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 20;

// console.log(val1);





// **************Ternary operator**************

const iceCreamPrice = 78;

iceCreamPrice < 80 ? console.log("less than 80") : console.log("greater than 80");

