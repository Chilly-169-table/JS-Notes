//Object is a special type of Data Structure which can store properties as well as functions which are then called methods
//Primitives are data types which can store only a single value.

//For primitives to have access to methods and properties, basically for primitives to act like Objects so that added functionality can be provided in the form of methods and properties an Object wrapper is introduced i.e created and destroyed.

// The “object wrappers” are different for each primitive type and are called: String, Number, Boolean, Symbol and BigInt. Same as their Primitive names

//a string object wrappers for Example:
let str = "Hello World";
alert(str.toUpperCase());

// in this case where a primitive is tring to access a method or a property a special object is created whick knows the value of the Primitive variable ,
// after returning the required output the Object wrapper is destroyed

// null/undefined have no Object wrappers or methods

// let str = "Hello";

// Task-1
// str.test = 5; // (*)

// alert(str.test);

// Depending on whether you have use strict or not, the result may be:

//     undefined (no strict mode)
//     An error (strict mode).

// Why? Let’s replay what’s happening at line (*):

//     When a property of str is accessed, a “wrapper object” is created.
//     In strict mode, writing into it is an error.
//     Otherwise, the operation with the property is carried on, the object gets the test property, but after that the “wrapper object” disappears, so in the last line str has no trace of the property.

// This example clearly shows that primitives are not objects.

// They can’t store additional data.
