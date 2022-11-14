// The regular {...} syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on.

// That can be done using constructor functions and the "new" operator.

//write a new normal function definition and call it using new Operator.
function User(name) {
  //Construnctor function should be named with Capital Letter
  this.name = name;
}
let user = new user("Jack"); //when called this way,

// inside the function a new object is created and is assigned to this impilictly, usually function body modifies this, adds new properties to it
//and this which contains the object is returned.

// new User(...) does something like:

function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

// let user = new User("Jack") gives the same result as:

let user2 = {
  name: "Jack",
  isAdmin: false,
};

//allows us to create multiple different objects with same structure
//  to implement reusable object creation code.

//And when a object needs to be created without future reuse, create the function and call it right there with the new Operator
// create a function and immediately call it with new
let user3 = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();
// This constructor can’t be called again, because it is not saved anywhere, just created and called.

//new.target is used to check whether a function has been called in constructor style or normal calling style

//if we need to make sure it is called in constrcutor style we can write
// It is undefined for regular calls and equals the function if called with new:
function user5(name) {
  if (!new.target) {
    //When it turns out to be false execute this code
    return new user5(name); //rerouting normal call to constructor type call
  }
  this.name = name;
}

let User6 = user5("John");
alert(User6.name); //prints John

//Usually constructors do not contain return
// If return is called with an object i.e return contains a object definition, then the object is returned instead of this.
// If return is called with a primitive, it’s ignored.

// Task-1
// in the function definition under return statement return the same object which will make sure both constructors return same obj and thus they become equal

//Task-2
function Calculator() {
  this.read = function () {
    //A new function definition is written inside a Constructor function and assigned to read() function property.
    this.a = +prompt("a?");
    this.b = +prompt("b?");
  };

  this.sum = function () {
    return this.a + this.b;
  };
  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());

//Task-3
function Accumulator(startingValue) {
  this.value = startingValue;
  function read() {
    temp = +prompt("value?");
    startingValue += temp;
  }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
//accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values
