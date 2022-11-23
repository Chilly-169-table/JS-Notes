// //Specifically called Prototypal inheritance in JS
// //Used whenever a new Object needs to be implemented based on a already present Object but with slight modifications or basically build a new object on top of a old object

// // In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), that is either null or references another object. That object is called “a prototype”:

// // lets say there are two objects Obj1 and Obj2 
// //setting Obj2's prototype property to Obj1 makes sure if a property is called by the user in Obj2 and it is not Present it looks it up in Obj1 and fetches it.

// // syntax: Obj2.__proto__ = Obj1; set Obj1 as Obj2's Prototype property

// // let animal = {
// //     eats: true
// // };
// // let rabbit = {
// //     jumps: true
// // };

// // rabbit.__proto__ = animal; // (*)

// // // we can find both properties in rabbit now:
// // alert(rabbit.eats); // true (**)
// // alert(rabbit.jumps); // true

// // // After inheritance is established, it can be said Object2 is inheriting Object1 
// // // So if Obj1 has a lot of useful properties and methods, then they become automatically available in Obj2. Such properties are called “inherited”.


// // // can also be set this way since it's a property
// // let user {
// //     __proto__: rabbit,
// // };

// // alert(user.jumps); //

// // There are only two limitations:

// // The references can’t go in circles.JavaScript will throw an error if we try to assign __proto__ in a circle.
// // The value of __proto__ can be either an object or null.Other types are ignored.


// // __proto__ is a getter/setter property for [[Prototype]](which is an internal property )


// // Recommened Usage: we should use Object.getPrototypeOf / Object.setPrototypeOf functions instead that get / set the prototype. get to read the data, and set to write data 

// // console.log(Object.getPrototypeOf(rabbit));
// // // console.log(Object.getPrototypeOf(animal));

// // console.log(Object.setPrototypeOf(rabbit, animal));

// // console.log(Object.getPrototypeOf(rabbit));


// // The prototype is only used for reading properties.
// // Write / delete operations work directly with the object.
// //Accessor properties are an exception, as assignment is handled by a setter function. So writing to such a property is actually the same as calling a function.

// // let animal1 = {
// //     eats: true,
// //     walk() {
// //         /* this method won't be used by rabbit */
// //     }
// // };

// // let rabbit1 = {
// //     __proto__: animal1
// // };

// // rabbit.walk = function () {
// //     alert("Rabbit! Bounce-bounce!");
// // };

// // rabbit1.walk(); // Rabbit! Bounce-bounce!    //Work directly with rabbit object, the state of animal object is preserved

// // // From now on, rabbit.walk() call finds the method immediately in the object and executes it, without using the prototype:

// // // working with accessor properties
// // let user = {
// //     name: "John",
// //     surname: "Smith",

// //     set fullName(value) {
// //         [this.name, this.surname] = value.split(" ");
// //     },

// //     get fullName() {
// //         return `${this.name} ${this.surname}`;
// //     }
// // };

// // let admin = {
// //     __proto__: user,
// //     isAdmin: true
// // };

// // alert(admin.fullName); // John Smith (*)

// // // setter triggers!
// // admin.fullName = "Alice Cooper"; // (**)

// // alert(admin.fullName); // Alice Cooper, state of admin modified
// // alert(user.fullName); // John Smith, state of user protected


// //this value is not affected by Prototype
// // so in the above example this is always equal to the Object that calls it and above admin.fullName leads to calling of setter function fullName(value) inside which this value becomes admin and is
// // written into admin object only not user

// // No matter where the method is found: in an object or its prototype. In a method call, this is always the object before the dot.

// // when the inheriting objects run the inherited methods, they will modify only their own states, not the state of the big object.
// // when we write data into this, it is stored into these objects since the this value is set to the object which is calling the method and it's structure is modified not the Original Object in which the method is present
// // As a result, methods are shared, but the object state is not.



// //for..in loop iterates over inherited properties too


// //Properties of Object such as Object.keys and Object.values ignore inherited values and properties of Object.prototype are ignored by default by for..in loop too as the properties present in Object.prototype are not enemurable by defualt


// // Task-1
// let animal2 = {
//     jumps: null
// };
// let rabbit2 = {
//     __proto__: animal2,
//     jumps: true
// };

// console.log(rabbit2.jumps); // ? (1) //true //first local property which is present in the Object is refered to

// delete rabbit2.jumps;

// console.log(rabbit2.jumps); // ? (2)//null //property mentioned in Object refered by [[prototype]] property is accessed

// delete animal2.jumps;

// console.log(rabbit2.jumps); // ? (3)//deletes the jumps Property in animal due to which undefined is returned

// // Task-2
// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3
// };

// let bed = {
//     sheet: 1,
//     pillow: 2
// };

// let pockets = {
//     money: 2000
// };

// pockets.__proto__ = bed;
// bed.__proto__ = table;
// table.__proto__ = head;

//once the Prototypes are defined in proper way and call to any properties will return right answer

// same as modern engines have optimised the property calls enough to make sure they rememeber where they first encountered a property and if a call to that Property is made irrespective of the Object from which it is called
// it will automatically look in the first place it encountered it

// Task-3
// the rabbit receives the full Property as the this value gets equal to the Object with which it is called which is rabbit

// Task-4
let hamster = {
    stomach: [],

    eat(food) {
        this.stomach.push(food);
    }
};

let speedy = {
    __proto__: hamster,
    stomach: [],
};

let lazy = {
    __proto__: hamster,
    stomach: [],
};

// This one found the food
speedy.eat("apple");
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple //after modification array is empty 

//because the stomach array is being modified in hamster level not speedy and lazy level 

