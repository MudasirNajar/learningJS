const user = {
    username: "Dennis Ritchie",
    price: 199,
    welcomeMessage: function () {
        console.log(`${this.username} has logged in`);

    }
}

// user.welcomeMessage();

// console.log(this);




// function one() {
//     let username = "Dennis Ritchie";
//     console.log(this.username);   // this keyword doesn't work inside of a function context
// }

// one();




// const one = function() {
//     let username = "James Gosling";
//     console.log(this.username);
// }
// one();


// const one = () => {
//     let username = "James Gosling";
//     console.log(this.username);
// }
// one();


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => num1 + num2;  // Implicit return

// const addTwo = (num1, num2) => (num1 + num2);

// const addTwo = (num1, num2) => ({username: "Dennis Ritchie"});

// console.log(addTwo(3, 4));





