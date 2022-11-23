// A string in JavaScript must be surrounded by quotes.
// Double and single quotes are “simple” quotes.There’s practically no difference between them in JavaScript.
// Backticks are “extended functionality” quotes.They allow us to embed variables and expressions into a string by wrapping them in ${… }
let name1 = "John";

// embed a variable
alert(`Hello, ${name1}!`); // Hello, John!

// ` ` - have embedding functionality and lets us have a string that extends over multiple lines
// embedd any expression into a string by wrapping it in ${}
//No character type in JS, There’s only one type: string. A string may consist of zero characters (be empty), one character or many of them.

//textual data is stored in Strings
// Backticks also allow us to specify a “template function” before the first backtick.
//  The syntax is: func`string`.The function func is called automatically, receives the string and embedded expressions and can process them.
//using a newline character \n with single and double quotes which denotes a line break

// let str1 = "Hello\nWorld"; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
// let str2 = `Hello
// World`;

// alert(str1 == str2); // true

// Character 	Description
// \n 	New line
// \r 	In Windows text files a combination of two characters \r\n represents a new break, while on non-Windows OS it’s just \n. That’s for historical reasons, most Windows software also understands \n.
// \', \", \` 	Quotes
// \\ 	Backslash
// \t 	Tab
// \b, \f, \v 	Backspace, Form Feed, Vertical Tab – mentioned for completeness, coming from old times, not used nowadays (you can forget them right now).

// All special characters start with a backslash character \.or escape character

// Because it’s so special, if we need to show an actual backslash \ within the string, we need to double it: basically write \\

// alert( `The backslash: \\` ); // The backslash: \

//In general Object's Property are called with Object.property_name and functions with Object.function_name(), to call a property we don't need () at the end.

//length Property can be called using .length

let str1 = "Hello";
alert(str.length); //prints 5

//To access a char at a specific postion in a string
// either use str[positon] or the method str.at(position)

let str2 = `Hello`;

// the first character - character counting starts from 0.
alert(str2[0]); // H
alert(str2.at(0)); // H

// the last character
alert(str2[str2.length - 1]); // o
alert(str2.at(-1));
//Giving negative input makes the method start counting from end of the string, for ex: to get last character of a string use -1 and last but one -2 and so on.

//And all the char's in the string can be iterated over using for..of:

for (let char of "Hello") {
  alert(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
