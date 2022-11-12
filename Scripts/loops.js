// while, do-while, for loops
//while(condition){

// iteratable;
// }

//do{

// }while(condition);

// for (begin; condition; step) {
//     // ... loop body ...
// }

// Normally, a loop exits when its condition becomes falsy.

// But we can force the exit at any time using the special break directive.

//The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).


// The ordinary break after input would only break the inner loop.That’s not sufficient – labels, come to the rescue!
// A label is an identifier with a colon before a loop:

//labelName:for loop-1
// nested for loop{
    //    break labelName; //This break would exit out of both the loops and go to the next line after the loop
    //continue labelName; //This would give the control to the next iteration of the labeled loop
//}

