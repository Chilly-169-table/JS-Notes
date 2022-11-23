//The normal function decleration is one way to declare functions, there exists two other methods too,
// function expression and arrow function

let sayHi = function () {
  //function body
};

// As the function creation happens in the context of the assignment expression (to the right side of =), this is a Function Expression.
// create a function and put it into the variable sayHi".

//But irrespective of the way it is decleared , function is always stored in a variable

//unlike a objects since the function code gets saved in the variable,
// we can copy a function's code directly into a another variable

function hello() {
  //function body
}

let world = hello;

//Now the same function can be called using world(); too

//when we provide a function as an argument to another function it becomes a callback function
//i.e depending on the function body they are called by the main function whenever needed
//Function expressions help us here in such a way where we can write the function this way:
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);

//instead of

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed.");
}

function showCancel() {
  alert("You canceled the execution.");
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//In the first case decleared using expression, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous

// Regular values like strings or numbers represent the data.

// A function can be perceived as an action.

//Differences b/w expressions and declearations

// A Function Declaration can be called earlier than it is defined.

// A Function Expression is created when the execution reaches it and is usable only from that moment.

// In strict mode, when a Function Declaration is within a code block, it’s visible everywhere inside that block. But not outside of it.
//In this case, a function expression can be used if needed which would act like a global function after the function body is written and can be called anywhere outside or inside the code block

//So mostly decleration should be used but when we need conditional declarations arise we should use function expression way.
