// FOR 

// for (i = 0; i < 10; i++) {
    // console.log(i); This prints out 0 - 9, as 10 isn't less than 10.
    // if(i === 7){
        // console.log('This is my favourite number');
        // continue;
    // }
    // if(i === 9){
        // console.log('This is the end');
        // break;
    // }
    // console.log(i);
// }
// The Continue prints the line and move to the next line, while break stops the flow.

// WHILE LOOPs
// let i = 0;

// while(i < 10){
//     if(i === 5){
//         console.log(`I love killua`);
//         continue;
//     }

//     console.log(`I love you toba`);
//     i++;
// }

// DOWHILE LOOPs Always run once
// let i = 100;

// do {
//     console.log('Youa re my world');
//     i++;
// }while (i < 10);

// Loop through arrays

// const cars = ['Chevy', 'Honda', 'Toyota', 'Benz'];

// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// The Foreach loop - If you are trying to loop through an array use the foreach.
// const fruits = ['Oranges', 'Banana', 'Pineapple', 'Apple', 'Guava'];

// fruits.forEach(fruit => {
//    console.log(fruit); 
// });
// Other parameters include index,array
//MAPS - which returns the array of objects
// const users = [
//     {id: 1, name:'John'},
//     {id: 2, name:'Sarah'},
//     {id: 3, name:'Dad'},
//     {id: 4, name: 'Mum'}
// ];

// const ids = users.map(function(user){
//     return user.id;
// });

// console.log(ids);

// For in Loop
const users = {
    firstName: 'Shade',
    lastName: 'Adu',
    age: '75'
};

for(let x in users) {
    console.log(`${x}: ${x}`);
}