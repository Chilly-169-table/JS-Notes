// There are eight basic data types in JavaScript.
// We can put any type in a variable.For example, a variable can at one moment be a string and then store a number:
// Programming languages that allow such things, such as JavaScript, are called “dynamically typed”, meaning that there exist data types, but variables are not bound to any of them.

//1st Type - Number - A Number is stored in memory in binary form. where Number is a 64 bit i.e there are exactly 64 bits to store a number:
// 52 of them are used to store the digits, 11 of them store the position of the decimal point, and 1 bit is for the sign.
// Values that belong to Numbers are -
//     Integers
//     Floating Point Numbers i.e decimals
//     Infinity, greater than any number and can be achieved or refernced by keyword "Infinity" or dividing a number by 0. For Ex: 1 / 0.
//     - Infinity
//     NaN - Computational Error, It is a result of an incorrect or an undefined mathematical operation, for instance: alert("not a number" / 2).

//     Hex - HexaDecimal Numbers can be typed in using prefix 0x and the value, For Ex: 0xff
//     Binary - Binary Numbers with 0b prefix
//     Octal Numbers - Octal Numbers with 0o prefix

// So if NaN is part of a mathematical expression, the whole o/p of expression becomes NaN only exception NaN ** 0 = 1;

// Doing maths is “safe” in JavaScript.We can do anything: divide by zero, treat non - numeric strings as numbers, etc.

// The script will never stop with a fatal error(“die”).At worst, we’ll get NaN as the result.

//Numbers Chapter
// Regular numbers in JavaScript are stored in 64 - bit format IEEE - 754, also known as “double precision floating point numbers”.

//In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billion = 1e9; // 1 billion, literally: 1 and 9 zeroes

alert(7.3e9); // 7.3 billions (same as 7300000000 or 7_300_000_000)
//  So basically multipies the number with 1 * whatever value is present after e 1e3 = 1000 i.e 1 * 1000 == 1000.
//a negative number after e divides the number for example 1e-3 is nothing but 1 * 1/1000

//Methods for Number Data Type

// The method num.toString(base) returns a string representation of num in the numeral system with the given base.
// num.toString(base);
//base can vary from 2 to 36, by deafult it's 10

//Methods for Rounding
// Math.floor - 3.1 becomes 3, and -1.1 becomes -2.
// Math.ceil - 3.1 becomes 4, and -1.1 becomes -1.

// Math.round - Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

// Math.trunc - Removes anything after the decimal point without rounding: 3.1 becomes 3, -1.1 becomes -1.

//These methods deal with rounding off the decimal point, but to round of to a specific digit after a decimal point we can use,
//toFixed(n) - rounds the number to n digits. this function returns a string o/p and can be converted to Number format with unary plus or Number() call.

//Other Math Functions

// Math.random() - Returns a random number from 0 to 1(not including 1).

// Math.max(a, b, c...) and Math.min(a, b, c...) - Returns the greatest and smallest from the arbitrary number of arguments.

//Math.pow(n, power) - Returns n raised to the given power

let no = 123;

// Task-1

let no1 = +prompt("Enter Number 1");
let no2 = +prompt("Enter No2?");
let no3 = no1 + no2;
alert(no3);




