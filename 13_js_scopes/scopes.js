
// if (true) {
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }

// console.log(a);
// console.log(b);
// console.log(c);




// function one() {
//     const username = "Dennis Ritchie";
    
//     function two() {
//         const website = "apple inc";
//         console.log(username);
//     }

//     // console.log(website);
    
//     two();
// }

// one();




// JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, 
// or imports to the top of their scope, prior to execution of the code.

console.log(addOne(5));
function addOne(num) {
return num + 1;
}


// console.log();
addTwo(10)
let addTwo = function(num) {
    return num + 2;
}

