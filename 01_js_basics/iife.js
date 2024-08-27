// Immediately Invoked Function Expressions(IIFE)

// (function chai() {   // Named iife
//     console.log("DB CONNECTED");
// })();

// (() => {
//     console.log("DB CONNECTED TWO");

// })();


((developer) => {
    console.log(`DB CONNECTED TWO: ${developer}`);

})("Brandan Baldwin");