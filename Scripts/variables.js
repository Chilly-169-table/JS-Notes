// Declare variables with let keyword, since JS is a dynamically typed language it doesn't need data type declearation. var was used in older codes which almost has the same functionality
// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

let message = "Hello, World";
//  camelCase is commonly used.
//  That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

// in the old times, it was technically possible to create a variable by a mere assignment of the value without using let.
// This still works now if we don’t put use strict in our scripts to maintain compatibility with old scripts.

//     // note: no "use strict" in this example

//     num = 5; // the variable "num" is created if it didn't exist

// alert(num); // 5

// To decleare a unchanging variable, i.e a constant use const
const myBirthday = '18.04.1992';

//Name constants with ALL-CAPS like this BIRTHDAY_DATE which are hard-coded values and are known prior to execution, and name other constants normally like variables in camelCase which are
// constants but are not known prior to execution.

//Task1
let admin;
let name;
name = "John";
admin = name;

alert(admin);

//Task 2
let ourPlanet = "Earth";
let currentUser = "John";

//Task 3
const BIRTHDAY = '18.04.1982'; //Since birthday does not change, use CAPS for naming it.
const age = somecode(BIRTHDAY);//Using small letters for age as it is still a const but will change next year and also the fact that it is known prior to execution.