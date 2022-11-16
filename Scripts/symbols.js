// only two primitive types may serve as object property keys:

// string type, or
// symbol type.
//A symbol represents a unique identifier , a value of this type can be created using Symbol()
let id = Symbol();
// Upon creation, we can give symbols a description (also called a symbol name), mostly useful for debugging purposes:
let id1 = Symbol("id");
//id1 is the symbol with desciption id

//Symbols are designed to be unique
//two symbols can have same description but doesn't mean they are equal
let user = Symbol("id");
let user1 = Symbol("id");
alert(user === user1); //displays false
//description or symbol name is just a label

// to summarize, a symbol is a “primitive unique value” with an optional description.

//Symbols are special in a way, they don't auto-convert to Strings
// If we really want to show a symbol, we need to explicitly call .toString() on it, like here:

let id3 = Symbol("id");
alert(id3.toString()); // Symbol(id), now it works//Symbol tag along with it's description is displayed like this: Symbol(id).

// Or get symbol.description property to show the description only:not the symbol value

let id4 = Symbol("id");
alert(id4.description); // id

// Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.
//some other-user who has access can create a symbol and data to it, it wouldn't modify the symbol or the data added to the object by our symbol

//If we want to use a symbol in an object literal {...}, we need square brackets around it.
// for ex:
let idof = Symbol("id");
let user5 = {
  name: "chilly",
  [id]: 45, //To provide a symbol reference use [symbol-name]
};
// That’s because we need the value from the variable id as the key, not the string “id”.

// Symbolic properties do not participate in for..in loop.

// For instance:

let id5 = Symbol("id");
let user7 = {
  name: "John",
  age: 30,
  [id5]: 123,
};

for (let key in user) alert(key); // name, age (no symbols)

// the direct access by the symbol works
alert("Direct: " + user[id5]); // Direct: 123

//objects.assign copies both string and symbol properties
//but objects.keys(object_name) ignores symbols

//The idea is during iteration or when trying to access it shouldn't be accessible but during cloning or duplication it should be available

//Global symbols
// Symbols inside the registry are called global symbols. If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.
// for ex:
let id6 = Symbol.for("key1"); //Since key1 symbol doesn't exist it is created and returned to id6
let id7 = Symbol.for("key1"); //Already exists the same symbol, so the same symbol is returned

alert(id6 === id7); // true

Symbol.keyFor()
