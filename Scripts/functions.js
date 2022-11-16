//functions - reusuable block of codes
//The syntax is - Function Decleration
// function name(parameter1, parameter2, ...parameterN) {
//     // body
// }

//A parameter can also be defined with a default value like this (parameter1="value or expression" that will be considered as argument whenever the function is called with no argument for this specific parameter
//  or is called with undefined value.

// The directive return can be in any place of the function. When the execution reaches it, the function stops, and the value is returned to the calling code(assigned to result above).
// A function with an empty return or without it returns undefined

//local variable - A variable decleared inside a function scope which is unavailable to the code outside the function scope

//Outer variable or Global variables - decleared outside a function scope and before writing the function's definition or body due to which it is available inside a function

//Outer variable is only used when there is no local variable available inside a function with the same name, so local variable >(has higher precedence) than outer variable

//When a value is passed to a parameter it is called a Argument and a function gets a local copy of the value given

//
// A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
// An argument is the value that is passed to the function when it is called (it’s a call time term).

// If a function is called, but an argument is not provided, then the corresponding value becomes undefined or if default value is provided it uses that value for the parameter.
//  and if the argument passed strictly equals undefined also default value is used

// A parameter can also be defined with a default value like this (parameter1="value or expression" that will be considered as argument whenever the function is called with no argument for this specific parameter
//  or is called with undefined value.
//And in the default parameter value can be anything from a simple string to a complex expression or a call to another function

//the parameter's value can also be checked in later stages and can be modified if needed using OR operator or normal assignement or ?? operator

//using OR operator
// paramter1 = parameter1 || anyValue //if parameter1 turns out to be falsy or has a undefined value return user-defined value anyValue to it

//using normal assignment
//  if (parameter === undefined) { // if the parameter is missing
//     parameter1 = 'empty message';
//   }

//using ??

//parameter1 = parameter1 ?? anyValue

//All 3 do the same JOB.

// It is possible to use return without a value. That causes the function to exit immediately.

//Whenever a return statement is not returned it is same as retruning undefined because by default function will return undefined.

//Task-1

// Whenever if condition is failing it skips over it and if an else block is present it immediately executes that and in 2nd case since else is not present it returns the same prompt as did the first block when if failed

// Task-2

function checkAge(age) {
  age > 18 ? true : confirm("Did Parents Allow You?");
  age > 18 || confirm("Did Parents Allow You?");
}

// Task-3
function min(a, b) {
  return a < b ? a : b;
}

//Task-4\
function pow(x, n) {
  return x * n;
}

x = prompt("x?");
n = prompt("n?");
if (n < 1) {
  alert("Enter a value greater than 1");
} else {
  pow(x, n);
}
