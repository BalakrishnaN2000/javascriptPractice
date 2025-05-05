// This is a single line comment
/* This is a
multi-line
comment */

/* console.log("Hello, World!");

let firstName = "Michael";
console.log(`FirstName is ${firstName} and type is `, typeof firstName);

firstName = "Trent"
console.log(`FirstName is changed to ${firstName}`);

// Type coersion
console.log("I am " + 24 + " years old");
console.log("24" - "10" - 3);
console.log("24" * "2");
console.log("24" / "2");

const age = 18;
if (age === 18) console.log('You just became an adult (strict)');
if (age == '18') console.log('You just became an adult (loose)');

const age_num = Number(prompt("What is your age?"));

if (age_num === 18) {       // works for loose equality (==)
    console.log("You are a legal adult");
}
*/

// let numOfIterations = 5;
// for(i=0; i<=numOfIterations; i++) {
//     console.log(i);
// }

// let countries = ['usa', 'canada', 'mexico', 'panama', 5, 'japan'];
// for(x in countries) {
//     console.log(x); // prints the indexes
// }

// let fruits = ['grapes', 'papaya', 'mango', 'banana', "apple"];
// for(x of fruits) {
//     console.log(x); // prints the values
// }

// ********* while loop *********
/*
let i = 0;
while (i >= -5) {
    console.log(i);
    i--;
}

i = 0;
do {
    console.log(i);
    i++;
} while (i <= 5);   */

// ********* switch statement *********
/*
let day = 5;
switch (day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid day");
        break;
}
*/
// ********Arrays*********
// let cars = new Array("Hyundai", "Honda", "Maserati");
// console.log(cars);
// cars.push("Tata"); //appends an element
// cars[1] = "Jeep";
// for(let x of cars) {
//     console.log(x);
// }

let countries = ['usa', 'canada', 'mexico'];
countries.pop(); // removes the last element
countries.shift(); // removes the first element
countries.unshift("panama"); // adds an element to the beginning
countries.push("japan"); // adds an element to the end
console.log(countries);

countries.splice(1, 0, "RSA", "India"); // adds elements at index 1, 0 means no elements are removed
console.log(countries);
