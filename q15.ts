//Changing Guest List: You just heard that one of your guests can’t make the dinner,so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

//• Print a second set of invitation messages, one for each person who is still in your list.

let guests:string[]=["Amna","Naila","Shomaila","Nazia"];

console.log(guests);

let canNotAttend: string="Naila";

console.log(canNotAttend + " " + "cannot make for a dinner." );

let newGuest: string ="Shazia";

guests[guests.indexOf (canNotAttend)] = newGuest

guests.map((items) => console.log(`Dear ${items} You are invited today for my birthday party dinner.`)); 




