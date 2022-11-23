// Properties have three other attributes along with value(also called Flags)
//writable - if True,value can be changed , otherwise Read-Only
// enumerable - If True, listed in loops otherwise Not.
// configurable - if true, the property can be deleted all the two attributes can be modified otherwise not.

let user = {
    name1: "john",
};

let descriptor = Object.getOwnPropertyDescriptor(user, name1);

//By default all Flags of a specific property of a Object are set to True.

// Object.getOwnPropertyDescriptor(object_name, property_Name);  allows to view the full information about a Property


// it returns a property descriptor object : contains value and all the Flags.

alert(JSON.stringify(user, null, 2));
// JSON An intrinsic object that provides functions to convert JavaScript values to and from the JavaScript Object Notation(JSON) format.

Object.defineProperty(user, name1, descriptor);//To change the flags we use this Method 
//object_name, property_name, property descriptor object to apply

//change the value by
Object.defineProperty(user, name, { writable: false });


// Property can also be created from scratch. 

let user2 = {};

Object.defineProperty(user, nameOf, { value: "Hello", writable: false })
//property descriptor object is similar to an Object with the same { } brackets and key:value format
// seting enumerable flag to false makes a Non-enemerable property, after which the Property is excluded from both for..in loop and Object.keys

//The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.
// Non-configurable is when the property's value is set to false
// A non - configurable property can’t be deleted, its attributes can’t be modified

//  configurable: false prevents changes of property flags and its deletion, while allowing to change its value.i.e writable flag is enabled

//A non - configurable cannot be deleted but the property's value can be changed

// We can change writable: true to false for a non-configurable property, thus preventing its value modification (to add another layer of protection). Not the other way around though.


Object.defineProperties(name1, { address: { value: "home", writable: true } });//can be used to define and set attributes for multiple properties at once while 
// syntax:Object.defineProperties(object_name, {key:{property_descriptor object}, key:{property_descriptor})

// combining Object.defineProperties(object, property_flag_descriptor) and Object.getOwnPropertyDescriptor we can clone an object using the data from what getOwnPropertyDescriptor returns

// Object.defineProperties(user3, { Object.getOwnPropertyDescriptor(user2) }); //All descriptor is used to create user3 Object) 

//cloning using for..in does not return or does not copy "flags" and also ignores symbolic and non - enemurable properties 