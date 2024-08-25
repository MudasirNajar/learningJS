// Object.create(); // Creates a singleton object

// let obj = {};
// console.log(typeof obj);




const mySymbl = Symbol("key1");

const jsUser = {
    name: "Dennis Ritchie",
    email: "dennis.ritchie@example.com",
    isLoggedIn: false,
    company: "apple inc",
    [mySymbl]: "myKey1",
    loggedInDays: ["monday", "thursday"]
}




// console.log(jsUser["name"]);
// console.log(typeof jsUser[mySymbl]);
// console.log(typeof mySymbl);

// Object.freeze(jsUser);
// jsUser.name = "Sir Dennis Ritchie";

// console.log(jsUser["name"]);



// jsUser["greeting"] = function () {
//     console.log(`Hello and welcome, ${jsUser.name}!`);
// }

// jsUser.greeting();


// let obj1 = {1: "a", 2: "b"};
// let obj2 = {3: "a", 4: "b"};

// let obj3 = {...obj1, ...obj2};  // Spread operator in use

// console.log(obj3);




// const batsmen = [
//     {
//         name: "Sachin Tendulkar",
//         jerseyNumber: 19
//     },
//     {
//         name: "Virat Kohli",
//         jerseyNumber: 18
//     },
//     {
//         name: "Mahendra Singh Dhoni",
//         jerseyNumber: 7
//     }
// ]

// console.log(Object.keys(batsmen[0]));
// console.log(Object.values(batsmen[0]));

// console.log(jsUser.hasOwnProperty("fullName")); 




// *******************object destructuring*******************

// const {company} = jsUser;
// const {loggedInDays: days} = jsUser; // attributes can be given other names too

// console.log(days);

// const {name: jsUserNameInBold} = jsUser;

// console.log(jsUserNameInBold);



// let userLoggedIn = function (username) {
//     if (!username) {
//         console.log(`Please provide a valid username`);
//         return;
//     }
//     console.log(`${username}, just logged in!`);
// }

// let userLoggedIn = function (username = "user") {     // Default value if no username is passed
//     console.log(`${username}, just logged in!`);
// }

// userLoggedIn("Dennis Ritchie");
// userLoggedIn();






// *******************rest operator*******************

// function calculateCartPrice(...num) {        // 
//     return num;
// }

// console.log(calculateCartPrice(2, 22, 31));




// function sum(...theArgs){
//     for(let arg of theArgs){

//     }
// }




// const user = {
//     username: "Dennis Ritchie",
//     price: 199
// }

function handleObject(anyObject) {
    console.log(`The username is ${anyObject.username} & price is ${anyObject.price}`);
}

handleObject(user);

user.username = "Rod Johnson";
console.log(user["username"]);

handleObject({
    username: "Larry Ellison",
    price: 399
})


