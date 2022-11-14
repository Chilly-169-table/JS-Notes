//Objects are stored by refernce not by value i.e
// let user = {}
// user variable stores a refernce to the new object created in memory, not the objects values directly.

//cloning a object
//can't be done the traditional way like this, where using assignment operator assinging object 1's data to object 2. object2 = object1

//There are two seperate methods

//one using inbuilt function Object.assign(dest, src1, src2 , etc)
//dest - is the dest object, and src1, src2 and so on are the source objects from which the duplication needs to be done.
//It copies the properties of all source objects into the target dest, and then returns it as the result.
// For example, we have user object, let’s add a couple of permissions to it:

let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: true }
alert(user.name); // John
alert(user.canView); // true
alert(user.canEdit); // true

// If the copied property name already exists, it gets overwritten:

let user1 = { name: "John" };

Object.assign(user1, { name: "Pete" });

alert(user1.name); // now user = { name: "Pete" }

// We also can use Object.assign to perform a simple object cloning:

let user3 = {
  name: "John",
  age: 30,
};

let clone = Object.assign({}, user);

alert(clone.name); // John
alert(clone.age); // 30

// Here it copies all properties of user into the empty object and returns it.
//Here a empty object is created and assigned user's properties

//2nd Method
// We can create a new object and replicate the structure of the existing one, by iterating over its properties and copying them on the primitive level.

// Like this:

let user4 = {
  name: "John",
  age: 30,
};

let clone1 = {}; // the new empty object

// let's copy all user properties into it
for (let key in user) {
  clone[key] = user[key];
}

// now clone is a fully independent object with the same content
clone.name = "Pete"; // changed the data in it

alert(user.name); // still John in the original object

//Properties can be refernces to other objects i.e can contain not just primitive properties but also other objects within it.
let user6 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

alert(user.sizes.height); // 182 //refering to the object within the object.

//Nested Cloning
//When a Object has another objects within it and it is cloned, every property is duplicated i.e for ex variables are duplicated but since a object is also present and since object's can be duplicated traditionally, its refernce is copied
// and both the new object and old object start to refer to the same nested object.

//Deep Cloning
//To fix the problem that comes with nested cloning or to avoid it and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well.
//  That is called a “deep cloning” or “structured cloning”.
// There’s structuredClone method that implements deep cloning.
let user7 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

let clone = structuredClone(user);

alert(user7.sizes === clone.sizes); // false, different objects

// user and clone are totally unrelated now
user.sizes.width = 60; // change a property from one place
alert(clone.sizes.width); // 50, not related

// The structuredClone method can clone most data types, such as objects, arrays, primitive values, Function properties aren’t supported.

// It also supports circular references, when an object property references the object itself (directly or via a chain or references).
//circular refernces is when a object has a property that refers to the object in which it is present.
// For instance:

let user8 = {};
// let's create a circular reference:
// user.me references the user itself
user8.me = user8;

let clone = structuredClone(user);
alert(clone.me === clone); // true

// As you can see, clone.me references the clone, not the user! So the circular reference was cloned correctly as well.

structuredClone({ f: function () {} }); //Fails//To handle such complex cases we may need to use a combination of cloning methods, write custom code
