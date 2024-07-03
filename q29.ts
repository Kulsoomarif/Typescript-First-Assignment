// 29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if
//  statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits : string[]=["Mango","Banana","Apple"]
//1st
if(favorite_fruits.includes ("Mango")){
    console.log("I realy like mango.")
}
//2nd
if(favorite_fruits.includes ("Banana")){
    console.log("I realy like banana.")
}

//3rd
if(favorite_fruits.includes ("Orange")){
    console.log("I realy like orange.")
}

//4th
if(favorite_fruits.includes ("Apple")){
    console.log("I realy like apple.")
}

//5th
if(favorite_fruits.includes ("Cherry")){
    console.log("I realy like cerry.")
}
