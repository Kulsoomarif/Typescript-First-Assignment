"use strict";
// 24.	More Conditional Tests: You don’t have to limit the number of tests
//  you create to 10. If you want to try more comparisons, write more 
//  tests. Have at least one True and one False result for each of the
//   following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than
//  and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//1st equality and inequality
let fruit = "apple";
console.log("Fruit is equal to apple");
console.log(fruit == "apple");
console.log("Fruit is not equal to apple");
console.log(fruit != "apple");
// 2nd using lower case
let uperCasefruit = "APPLE";
console.log("APPLE is equal to apple after changing to lower case");
console.log(uperCasefruit.toLocaleLowerCase() == "apple");
console.log("APPLE is not equal to apple after changing to lower case");
console.log(uperCasefruit.toLocaleLowerCase() != "apple");
//3rd Numerical Test
let num1 = 5;
let num2 = 10;
console.log("5 is equal to 10");
console.log(num1 == num2);
console.log("5 is not equal to 10");
console.log(num1 != num2);
console.log("5 is greater than to 10");
console.log(num1 >= num2);
console.log("5 is less than  to 10");
console.log(num1 < num2);
console.log("5 is greater than or equal to 10");
console.log(num1 > num2);
console.log("5 is less than or equal to 10");
console.log(num1 <= num2);
//4th "And" or "Or" Operator
//"And"
console.log("5 is not equal to 10 and less than 10");
console.log(num1 != num2 && num1 < num2);
console.log("5 is not equal to 10 and greater than 10");
console.log(num1 != num2 && num1 > num2);
//"Or"
console.log("5 is not equal to 10 and less than 10");
console.log(num1 != num2 && num1 < num2);
console.log("5 is  equal to 5 or less than 10");
console.log(num1 == num2 || num1 < num2);
console.log("5 is equal to 10 and greater than 10");
console.log(num1 == num2 || num1 > num2);
//5th item in array
let fruits = ["Banana", "Mango", "Kiwi"];
console.log("Banana is include in my fruits array.");
console.log(fruits.includes("Banana"));
console.log("Banana is not include in my fruits array.");
console.log(!fruits.includes("Banana"));
