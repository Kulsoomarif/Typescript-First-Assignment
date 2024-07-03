//Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. 
//.Print the array to show that its order has been changed.

//1st
let places:string[]=["Sydney","Paris","America","Canada","Sweden"]
console.log("Orignal order:",places);
//2nd
console.log("Alphabetical order:",places.slice().sort())
//3rd
console.log("Still in Orignal order:",places);
//4th
console.log("Reverse alphabetical order:",places.slice().reverse())
//5th
console.log("Again Orignal order:",places);
//6th
places.reverse();
console.log("Reverse Order:",places);
//7th
places.reverse()
console.log("Reverse to its orignal order:",places)
//8th
console.log("Sorted in lphabetical order:",places.slice().sort())
//9th
console.log("Stored in reverse alphabetical order:",places.slice().reverse())

