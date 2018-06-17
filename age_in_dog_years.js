// My age as an Integer
const myAge = 20;

// Value for earlier years in life
let earlyYears = 2;

earlyYears *= 10.5;

// Account for early years variable
let laterYears = myAge - 2;

// Calculate dog years
laterYears *= 4;

/* Check values
console.log(`earlyYears: ${earlyYears}, laterYears: ${laterYears}`);
*/

// Calculate my age in dog years
let myAgeInDogYears = earlyYears * laterYears;

// Save my name as a string
let myName = "Aadit".toLowerCase();

// Output
console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);