console.log("Hello, world!");

/*
 * This is a multi-line comment.
 * It is used to write a description of the code.
 */

// This is a single-line comment.\\
// var x = 5; // We do not use var anymore, we use let and const

// let firstName = "John"; // String
// let age = 25; // Integer Number (whole number)
// let exampleFloat = 30.2; // Float Number (decimal number)
// let fromBergen = true; // Boolean (true or false)
// let exampleArray = ["Mazda", "Opel", "Saab", "BMW"]; // Array
let myObject = {
  firstName: "Ole",
  lastName: "Nordmann",
  age: 30,
  eMail: "ole.nordmann@gmail.com",
};

// console.log(myObject); // Output: {firstName: "Ole", lastName: "Nordmann", age: 30, eMail: "

// console.log(exampleArray); // Output: ["Mazda", "Opel", "Saab", "BMW"]

// let x = 11;
// let y = 4;

// x++; // Increment x by 1
// console.log(x); // Output: 12

// let z = x + y; // Addition
// console.log(z); // Output: 16

// Operators

let a = 10;
let b = 15;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Comparison Operators

let x = 10;
let y = 11;

console.log(x > y); // Output: false    (greater than)
console.log(x < y); // Output: true (less than)
console.log(x == y); // Output: false   (equal to)
console.log(x === y); // Output: false (strict equal to)
console.log(x != y); // Output: true (not equal to)

console.log(x >= y); // Output: true (greater than or equal to)
console.log(x <= y); // Output: true (less than or equal to)

// Logical Operators

let erVoksen = true;
let barneSkole = false;

console.log(erVoksen && !barneSkole); // Output: true (AND)

// Conditional Statements

const age = 17;
if (age >= 18) {
  console.log("Du er voksen");
} else {
  console.log("Du er barn");
}

let firstName = "Tjollof";
let numberOfCats = 7;

if (numberOfCats >= 20 && firstName === "Magda") {
  console.log("Du er en kattelover");
} else if (numberOfCats <= 20 && firstName === "Tjollof") {
  console.log("Du er en hundelover");
} else if (numberOfCats === 0) {
  console.log("Du har ingen kjæledyr");
} else if (numberOfCats > 20) {
  console.log("Du har for mange katter");
}

let user = {
  userName: "Sjur",
  userAge: 49,
  userCity: "Sandefjord",
  userCountry: "Norge",
  userGender: "Mann",
};

if (usser.userName === "Per") {
  console.log("Velkommen, Per!");
} else if (user.userAge <= 18) {
  console.log("Du er for ung til å være her");
} else if (user.userName === "Sjur" && user.userCity === "Sandefjord") {
  console.log("Velkommen, Sjur, fra Sandefjord!");
} else {
  console.log("Velkommen, " + user.userName + "!");
}
