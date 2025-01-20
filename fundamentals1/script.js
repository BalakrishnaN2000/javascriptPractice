/*
let js = 'amazing';
if(js === 'amazing') alert('JavaScript is FUN!');

console.log(78+23-11);

let FIRSTNAME = "Jones";
console.log(FIRSTNAME);

console.log(typeof null)
*/

// type conversion
/* const inputYear = '1991';
console.log(inputYear, typeof inputYear, Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(String(23), 23);

// type coercion
console.log("I am " + 24 + " years old");
console.log("24" - "10" - 3);
console.log("24" * "2");
console.log("24" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
console.log(typeof n);
*/

// there are 5 falsy values: 0, '', undefined, NaN, null

/* console.log(Boolean(0));
console.log(Boolean(undefined))
console.log(Boolean('String'))
console.log(Boolean(''));
console.log(Boolean({}));

const num = 0;
if (num) {
    console.log('num is truthy');
} else {
    console.log('num is falsy');
}

var height;
console.log(typeof height); */

// == vs ===
const age = 18;
if (age === 18) console.log('You just became an adult (strict)');
if (age == '18') console.log('You just became an adult (loose)');

const age_num = Number(prompt("What is your age?"));
//console.log(fav_num);
//console.log(typeof fav_num);
if (age_num === 18) {       // works for loose equality (==)
    console.log("You are a legal adult");
}
