"use strict";
// 37.	Large Shirts: Modify the make_shirt() function so that shirts are 
// large by default with a message that reads I love TypeScript. Make a 
// large shirt and a medium shirt with the default 
// message, and a shirt of any size with a different message.
function make_shirt(size = "large", printMessage = "I love typeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
make_shirt();
make_shirt("medium");
make_shirt("small", "I love programing");
