//not just objects functions can also be a part of a Object.
//Actions are represented in JS by functions in properties.
//A function that is a property of a object is called it's Method.

//To call a method, using square brackets the Syntax is : obj['key']();

let user = {
  name: "John",
  age: 30,
};

user.sayHi = function () {
  //here with a function expression a function is created and added to the object's sayHi property which turns it into user object's new method and can call be called using user.sayHi()
  alert("Hello!");
};

user.sayHi(); // Hello!

// we could use a pre-declared function as a method, like this:
// first, declare
function sayHi() {
  alert("Hello!");
}

// then add as a method
user.sayHi = sayHi;

user.sayHi(); // Hello!

//2 different ways to inlcude a function in a object i.e a method
// these objects do the same

user1 = {
  sayHi: function () {
    alert("Hello");
  },
};

user2 = {
  sayHi() {
    // same as "sayHi: function(){...}"
    alert("Hello");
  },
};

//methods will need access to information inside object i.e properties which is done through this keyword
let user2 = {
  name: "John",
  age: 30,

  sayHi() {
    // "this" is the "current object"
    alert(this.name);
  },
};

user.sayHi(); // John
// Here during the execution of user.sayHi(), the value of this will be user.

// The rule is simple: if obj.f() is called, then this is obj during the call of f, i.e wherever this keyword is present inside the method it is replaced by obj
// The value of this is evaluated during the run-time, depending on the context.
// If there’s this inside a function, it expects to be called in an object context.

// We can even call the function without an object at all:
//method-call is done without inlcuding object in the call
function sayHi() {
  alert(this);
}

sayHi(); // undefined

//In strict mode, in such a case this will turn out to be undefined and trying to access any properties will lead to error i.e like this.name
// In non-strict mode the value of this in such case will be the global object (window in a browser,

//This flexibility of this allows us to use the same function decleared in one object in different contexts or in different objects.

//Arrow functions they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.
// For instance, here arrow() uses this from the outer user.sayHi() method:

let user3 = {
  firstName: "Ilya",
  sayHi() {
    let arrow = () => alert(this.firstName);
    arrow();
  },
};

user3.sayHi(); // Ilya

//it’s useful when we actually do not want to have a separate this, but rather to take it from the outer context.

//Task -1
//In whichever function this is present it should be called in Method context otherwise undefined is returned code blocks and object literals do not affect it.
// The value of this is one for the whole function, code blocks and object literals do not affect it.
//We get an error cause the method in which this was present was called in function context not in object context.
//Solution: Enclose the this block of code or wherever this is present in a seperate sub-function under the main function which when called using main-object-in-which-function-is-present.sub-function-name().property
// makes sure when this is returned it's value turns out to be of the object's value and not undefined.

//Task-2

let calculator = {
  read(val1, val2) {
    this.value1 = prompt("a?");
    this.value2 = prompt("b?");
  },
  sum() {
    return +this.value1 + +this.value2;
  },
  mul() {
    return +this.value1 * +this.value2;
  },
};

calculator.read(5, 10);
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function () {
    // shows the current step
    alert(this.step);
  },
};

//writing return this which will return the whole object from each call to the method will make sure chainable calls such as ladder.up().up().down()
