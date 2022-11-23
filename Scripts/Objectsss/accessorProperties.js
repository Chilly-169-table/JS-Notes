//There are two types of Properties Data and accessor properties

//Data Properties is usually what normally we work with key : value is a data property

//accessor property are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set:

//let obj = {
//   get propName() {
//     // getter, the code executed on getting obj.propName
// },

//   set propName(value) {
//     // setter, the code executed on setting obj.propName = value
// }


// getter and setter are special type of methods or properties that are written like normal methods but called like a normal property but written in method syntax 

let user = {
    firstName: "John",
    lastName: "Smith",
    get combine() {
        return this.firstName + this.lastName
    }
}

alert(user.combine) //displays John Smith

user.combine = "John"; // Won't work unless a setter function is written 

//usually written with a parameter


//  we have a “virtual” property fullName.It is readable and writable.

let user = {
    firstName: "John",
    lastName: "Smith",
    get combine() {
        return this.firstName + this.lastName
    },
    set combine(value) {
        [this.name, this.surname] = value.split(" ");
    }
}


// set method is called when we try to assign user.combine = value;  i.e set combine executes 


// an accessor descriptor may have:

// get – a function without arguments, that works when a property is read,
//     set – a function with one argument, that is called when the property is set,
//         enumerable – same as for data properties,
//             configurable – same as for data properties.

//Accessor properties don't have writable and value flags 

let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {  //Accessor fullName with get and set function
    get() {
        return `${this.name} ${this.surname}`;
    },

    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

alert(user.fullName); // John Smith

for (let key in user) alert(key); // name, surname

//  a property can be either an accessor(has get / set methods) or a data property(has a value), not both.

// If we try to supply both get and value in the same descriptor, there will be an error:

// Error: Invalid property descriptor.
Object.defineProperty({}, 'prop', {
    get() {
        return 1
    },

    value: 2
});
