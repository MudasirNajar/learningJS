// let a = 10;
// let b = 10;


// let sum = a + b;
// console.log(`The sum of ${a} & ${b} = ${sum}`);
// let myName = 'Mudasir'

// console.log(`value: ${myName} type: ${typeof myName}`);

// let students = ['Supriya', 'Mudasir', 'Tanveer'];

// console.table(students);

// students.st



// console.log(null || "Mudasir");
// console.log("Billie Eilish" || "Mudasir");


// console.log(`sum: ${num1 + num2}`)
// console.log(`sub: ${num1 - num2}`);
// console.log(`mul: ${num1 * num2}`);
// console.log(`div: ${num1 / num2}`);

// if(num1 % 2 == 0){
    //     console.log(`${num1} is even`);
    // }else{
        //     console.log(`${num1} is odd`);
        // }
        
        // let num1 = 19;
        // let num2 = 50;

        // (num1 > 20)? console.log(`Aap Mumbai aa sakte ho`): console.log(`Nikal laude`);

        let day = new Date().getDay;
        day = 6;
        let today = '';
        
        switch(day) {
            
            case 0: 
            today = 'Sunday';
            break;
            case 1: 
            today = 'Monday';
            break;
            case 2: 
            today = 'Tuesday';
            break;
            case 3: 
            today = 'Wednesday';
            break;
            case 4: 
            today = 'Thursday';
            break;
            case 5: 
            today = 'Fridayt';
            break;
            case 6: 
            today = 'Saturday';
            break;

            default:
                today = 'Enter a proper day';
                break;

        }
        
        console.log(`Today is ${today}`);