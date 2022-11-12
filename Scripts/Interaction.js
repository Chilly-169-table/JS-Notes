// Functions to interact with the user in the browser environtment.
//alert("message") -  It shows a message and waits for the user to press “OK”.
// The mini - window with the message is called a modal window.The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons,
//  etc, until they have dealt with the window.In this case – until they press “OK”.

// prompt(title, [default]); - It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.
// returns the data entered into the field, and if cancel is pressed returns null.
// The square brackets around default in the syntax above denote that the parameter is optional, not required.


//confirm 
// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
//true is returned if OK is pressed and false otherwise.



let userName = prompt("What is your name?");
alert(userName);

