//To avoid cumbersome code where, sub-properties of objects are invovled
//For Ex: to check if a street property under address property of user object exists we have to first check if user.address exists and then the sub-property i.e street exists, for this we write
// if (user.address ? user.address.street : undefined) //where-in we also have to make sure undefined is returned when a property doesn't exist For Ex: here user.address doesn't exist return undefined.
// can also be written this way if(user.address && user.address.street), still is cumbersome, so to avoid repetition
// The optional chaining ?. stops the evaluation if the value before ?. is undefined or null and returns undefined.
//so the same can be written as user?.address?.street.
// value?.prop:

// works as value.prop, if value exists,
// otherwise (when value is undefined/null) it returns undefined.

//the ?. syntax makes optional the value before it, but not any further.

// E.g.in user?.address.street.name the?.allows user to safely be null / undefined(and returns undefined in that case), but that’s only for user.
// Further properties are accessed in a regular way.If we want some of them to be optional, then we’ll need to replace more.with?.

// If there’s no variable user at all, then user?.anything triggers an error:

// ReferenceError: user is not defined
// user?.address;

// The variable must be declared (e.g. let/const/var user or as a function parameter). The optional chaining works only for declared variables.

// The optional chaining ?. is not an operator, but a special syntax construct, that also works with functions and square brackets.
//?.() - makes sure a function is only called if it's exists i.e object.function-name?.()

// The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot ..
// it allows to safely read a property from an object that may not exist.i.e undefined is returned if it doesn't exist
//  we can use ?. with delete:

// delete user?.name; // delete user.name if user exists
