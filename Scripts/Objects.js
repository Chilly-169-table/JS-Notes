//  objects are used to store keyed collections of various data and more complex entities.
// An object can be created with figure brackets {…} with an optional list of properties.
// A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.
// When we write our code using objects to represent entities, that’s called object-oriented programming, in short: “OOP”.

// An empty object(“empty cabinet”) can be created using one of two syntaxes:

// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

//inside the object body we can decleare properties-
//key : value,
// //John:30
// let user = {
//     hello: "world",
//     hello1: 1,
//     age: 30,
// }

// //We can get property values using,dot operator

// alert(user.hello1);
// //and also using square brackets, square brackets can also used to add a new property or modify existing property using it's key value.
// // object-name[key value of the property];
// alert(user["hello"]);
//user["hello"] = true;  //Modifying value of hello property
// To remove a property, we can use the delete operator:

// delete user.age;

// Reading a non-existing property just returns undefined, so it can be easily checked whether a property exists or not
// in operator can also be used to check whether a property exists or not.
//"key" in object

//To walk over all keys of an object, there exists a special form of the loop: for..in.

// for (key in object) {
// executes the body for each key among object properties
// }

//the key variable is used to iterate over all the properties of the object

//use either object_name.key or object_name[key] to get the values of each property while loop is running.

//The way properties are ordered is integers properties are sorted in ascending order and others in creation order.

// There are many other kinds of objects in JavaScript:

// Array to store ordered data collections,
//Date to store the information about the date and time,
//Error to store the information about an error.
// …And so on.

//Refernce to an object Data type can be done by obj

//Task-1
// let user = {
//     name: "John",
//     surname: "Smith",
// }

// user.name = "Pete";

// delete user.name;

// Task - 2

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }

//     return true;
// }

// let schedule = {};

// alert(isEmpty(schedule)); // true

// schedule["8:30"] = "get up";

// alert(isEmpty(schedule)); // false

// Task - 3

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum;

// for (let key in salaries) {
//     sum += salaries[key];
// }

// alert(sum);

let user = {};
