"use strict";
// 31.	No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
//1st
let userNames = ["Ali", "Sara", "Admin", "Ahmed", "Saba"];
if (userNames.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser == "Admin") {
            console.log(`Hello ${oneUser} would you like to see our status report.`);
        }
        else {
            console.log(`Hello ${oneUser} Thank you! for login again.`);
        }
    });
}
console.log("\n");
//2nd
let userNames1 = ["Ali", "Sara", "Admin", "Ahmed", "Saba"];
userNames1 = [];
if (userNames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    userNames1.forEach(oneUser => {
        if (oneUser == "Admin") {
            console.log(`Hello ${oneUser} would you like to see our status report.`);
        }
        else {
            console.log(`Hello ${oneUser} Thank you! for login again.`);
        }
    });
}
