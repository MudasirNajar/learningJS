
// let camera = {
//     brand: 'Canon',
//     colour: 'black',
//     mps: 100,
//     price: 5000
// };

// let prop = 'price';
// console.log(camera[prop]);


let student = {
    name: 'Dennis Ritchie',
    grade: 10,
    address: {
        place: 'Jubilee Hills',
        city: 'Hyderabad',
        state: 'TS'
    }
}

// console.log(student.address.city);

student.age = 19;

student.address.place = 'PanCard Club Road';
delete student.age;
console.log(student);
