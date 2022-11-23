//In case of Operators operating over Objects such as object1 + object2
// objects are auto-converted to primitives, and then the operation is carried out over these primitives and results in a primitive value.
// the result of obj1 + obj2 (or another math operation) can’t be another object

//converting to other primitive data types
//Boolean - There's no conversion to Boolean, all objects are true in Boolean context
//Only Numeric and string conversions exists
// The numeric conversion happens when we subtract objects or apply mathematical functions.

//As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.

// We can implement string and numeric conversion by ourselves, using special object methods.

// There are three variants of type conversion, that happen in various situations in case of objects. They’re called “hints”

// "String" variant
// when we are doing an operation on a object which excepts a string , it is auto-converted
//ex: alert(object); implicitly converted
// anotherObject[object] = 123;  //using object1 as property key for anotherObject leads to implicit conversion of Object1 to string

//"number"

// For an object-to-number conversion, like when we’re doing maths:

// explicit conversion
let num = Number(obj);

// maths (except binary plus)
let n = +obj; // unary plus
let delta = date1 - date2;

// less/greater comparison
let greater = user1 > user2;

//converted to Number Data type when Operators are used upon objects and most Mathematical Functions

//"default"

//     Occurs in rare cases when the operator is “not sure” what type to expect.

//     For instance, binary plus + can work both with strings (concatenates them) and numbers (adds them). So if a binary plus gets an object as an argument, it uses the "default" hint to convert it.

//     Also, if an object is compared using == with a string, number or a symbol, it’s also unclear which conversion should be done, so the "default" hint is used.

// // binary plus uses the "default" hint
// let total = obj1 + obj2;

// // obj == number uses the "default" hint
// if (user == 1) { ... };

// The greater and less comparison operators, such as < >, can work with both strings and numbers too. Still, they use the "number" hint, not "default".
