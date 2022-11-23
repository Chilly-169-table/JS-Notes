// const { prototype } = require("events")

//When creating new Objects using  = new function_name(value) basically constructor function setting a function_name.prototype to another object will make all the newly created objects using 
// the function will make the newly created objects [[prototype]] property set to the object present in F.prototype

// let animal = {
//     eats: true
// };

// function Rabbit(name) {
//     this.name = name;
// }

// Rabbit.prototype = animal;

// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

// console.log(rabbit.eats); // true


// Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".

//If not modified, like in the above example, The default "prototype" is an object with the only property constructor that points back to the function itself.

// function.prototype = {constrcutor: function};

// function NewFunction() {
//     console.log(NewFunction.prototype.constructor);
// }

// let newFunc = new NewFunction();
// console.log(newFunc.constructor);


// // Task - 1
// function Rabbit() { }
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();

// console.log(rabbit.eats); //true

//Sub-Task-1
// function Rabbit() { }
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// console.log(rabbit.eats); // ? true once [[prototype ]] is set for a object during it's creation it cannot be modified

// Sub-Task-2
// function Rabbit() { }
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert(rabbit.eats); // both the Object and [[prototype]] are refering to the same Object changing values through one refernce is also visible when the same object is refered to using another refernce


// //Sub-Task 3 an 4
// function Rabbit() { }
// Rabbit.prototype = {
//     eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;  //all delete operations work directly on the Object not on a inherited property such as eats since rabbit doesn't have it's own eats property it can't delete anything 
// delete Rabbit.prototype.eats;

// console.log(rabbit.eats);
// console.log(Rabbit.prototype.eats);

// let obj = {};

// let obj2 = new obj.constructor();   //constructor can be considered to be a property where by default it refers back to the function itself