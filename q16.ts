//Q16: More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// 1.
let guests:string[]=["Amna","Shazia","Shomaila","Nazia"];
guests.map((items) => console.log(`Dear ${items} Good news!! we found a new bigger dinner table..`)); 
console.log("\n")
// 2.
guests.unshift("Sumaira");
// 3.
guests.splice(3,0,"Sara");
// 4.
guests.push("Sania");
// 5.
for(let guestList of guests){
    console.log(`Hello ${guestList} I am inviting you for my birthday party dinner`);
}
export{guests}




