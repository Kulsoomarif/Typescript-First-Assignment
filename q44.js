"use strict";
// 44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
function sandwich(...items) {
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(singalItem => console.log(singalItem));
    console.log("Now enjoy your yummy sandwich");
}
sandwich("Egg", "Butter");
sandwich("chicken", "Cheese", "Bread", "Tomato", "Mayo");
sandwich("ketchup", "Oregano", "fries");
