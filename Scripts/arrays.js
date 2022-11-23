// Arrays are used to store ordered collection of values of multiple data type's just like an Object.It can store Objects, functions also.
//Arrays are used over objects for two reasons on top of that Array is a special kind of Object

//They Provide a ordered collection and on top of that objects provide no way to manage the order of elements which arrays do.

//There are two syntaxes for creating arrays
let array = new Array();
let array1 = [];
//Elements are numbered from 0 and can be accessed using the index or number in square brackets
// array_name[index]; returns the element at that index just like how a char of a string is accessed

//Array Properties
//Array.length returns the length of an array

// // mix of values
let arr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];

// get the object at index 1 and then show its name
alert(arr[1].name); // John

// get the function at index 3 and run it
arr[3](); // hello

// An array, just like an object, may end with a comma:

let fruits = ["Apple", "Orange", "Plum", { name1: 123 }, function () {}];

//Array Method
//Array.at(index) returns element at that index
//Unlike Strings using negative value in square bracket doesn't work i.e doesn't return desired value but returns undefined.
//But for Array.at() negative values work too and -1 returns last element and -2 last but one element and so on.

//Queue is the most common use of an array(FIFO - First In, First Out)
//It supports two operations
//push appends an elements to the end
//pop get the 1st element in the queue so that 2nd element becomes 1st.

// There’s another use case for arrays – the data structure named stack.(LIFO - Last In, First out)
// It supports two operations:

//     push adds an element to the end.
//     pop takes an element from the end.

//dequeue is a structure which can work both as a queue/stack

// Methods that work with the end of the array:
// array_name.push();
// array_name.pop();

// Methods that work with the beginning of the array:
// array_name.shift()
// Extracts the first element of the array and returns it:

// array_name.unshift()
// add element to beginning of array

// Methods push and unshift can add multiple elements at once

//Array is a special kind of Object

// The square brackets used to access a property arr[0] actually come from the object syntax. That’s essentially the same as obj[key], where arr is the object, while numbers are used as keys.
//basically keys are numbers which are assigned automatically, user needs to give only value in the Property
//dot syntax won't work

// They extend objects providing special methods to work with ordered collections of data and also the length property

//just like Objects, Arrays are also stored as reference
// The engine tries to store its elements in the contiguous memory area, one after another unlike a object

//dequeue specific methods push/pop which work at the ending of an array run fast
// while shift/unshift run slow

//We can use either the old for loop to iterate over Array elements or use Array and String specific for..Of loop

for (fruit of fruits) {
}

//and also Object specific for..in loop //Not recommended for Arrays

for (key in fruits) {
}

// The for..of doesn’t give access to the number of the current element, just its value,
// If number is also needed use traditional for
for (let i = 0; i < fruits.length; i++) {
  // i; gives the Number
  // fruits[i];gives the Value
}

//Array.length works in such a way that, it is actually not the count of values in the array, but the greatest numeric index(i.e key in terms of Object) plus one.

//If manually Array.length of a specific array is modified i.e increased in value it doesn't matter but if we decrease it the array gets truncated due to above reason

// So, the simplest way to clear the array is: arr.length = 0;.

// If new Array is called with a single argument which is a number, then it creates an array without items, but with the given length.
let arr4 = new Array(2); // will it create an array of [2] ?

alert(arr4[0]); // undefined! no elements.

alert(arr4.length); // length 2

// Arrays can have items that are also arrays. We can use it for multidimensional arrays, for example to store matrices:

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert(matrix[1][1]); // 5, the central element


// Comparsions
alert( [] == [] ); // false
alert( [0] == [0] ); // false


// Task-1 
// Since both variables refer to the same array modifying a property through any of the both variables modifys the same array.