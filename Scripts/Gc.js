//Garbage Collection
//The main concept of memory management in JavaScript is reachability.
// Simply put, “reachable” values are those that are accessible or usable somehow.
// There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.
// There’s a base set of inherently reachable values, that cannot be deleted for obvious reasons.

// For instance:

//     The currently executing function, its local variables and parameters.
//     Other functions on the current chain of nested calls, their local variables and parameters.
//     Global variables.
//     (there are some other, internal ones as well)

// These values are called roots.

// Any other value is considered reachable if it’s reachable from a root by a reference or by a chain of references.

// For instance, if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable.And those that it references are also reachable.

// user has a reference to the object
let user = {
  name: "John",
};

// If the variable refering to the object is modified with another refernce, the object would be deleted by the GC.
// Outgoing references do not matter. Only incoming ones can make an object reachable.
//And in all cases having a incoming refernce doesn't make the object reachable, if a object is directly or indirectly not being refered to by a root object it gets deleted

// The basic garbage collection algorithm is called “mark-and-sweep”.

// The following “garbage collection” steps are regularly performed:

//     The garbage collector takes roots and “marks” (remembers) them.
//     Then it visits and “marks” all references from them.
//     Then it visits marked objects and marks their references. All visited objects are remembered, so as not to visit the same object twice in the future.
//     …And so on until every reachable (from the roots) references are visited.
//     All objects except marked ones are removed.
