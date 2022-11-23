// Object.prototype and all primitive data types have in-built prototype which are Native Prototypes

// function Hello() {

// }
// let obj = new Hello();
// console.log(obj.constructor);

// let obj = {};
// console.log(obj)
// console.log(obj);


// //In-built Objects such as Date, Number and Function have default prototype set to corresponding .prototype object with in-built methods and properies i.e Array.prototype becomes it's prototype and provides methods
// //so an object created from default constructor function has it's __proto__ set to Object.prototype and can be modified through __proto__ property

// //  all of the built -in prototypes have Object.prototype on the top.That’s why some people say that “everything inherits from objects”.

// //Array Prototype 
// let arr = [1, 2, 3];  // can also be created using constructor function let arr = new Array();

// // it inherits from Array.prototype?
// console.log(arr.__proto__ === Array.prototype); // true

// // then from Object.prototype?
// console.log(arr.__proto__.__proto__ === Object.prototype); // true

// // and null on the top.
// console.log(arr.__proto__.__proto__.__proto__); // null

//Primitives
// If we try to access Primitive Data Types or Methods an Object wrapper is created using built -in constructor functions for each data String, Number and Boolean\
//Methods of this objects also reside in Prototype available as String.prototype and so on.
// let str = "Hola";
// console.log(str.toUpperCase());
// console.log(String.prototype.toUpperCase);
// console.log();

String.prototype.show = function () {
    console.log("Hello");
};

"BOOM!".show()
String.prototype.show();



// Polyfilling is a term for making a substitute for a method that exists in the JavaScript specification, but is not yet supported by a particular JavaScript engine.

//Not recommened to modify native prototypes by adding new methods like above example, only Polyfills are allowed to do that


//A custom object created can derive new methods for built-in prototypes in a process called method borrowing
let obj = {

};

obj.join = Array.prototype.join //deriving a Array-prototype specific method into our object, which lets us have the same functionality of the method in our . 

