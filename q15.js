"use strict";
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests = ["Amna", "Naila", "Shomaila", "Nazia"];
console.log(guests);
let canNotAttend = "Naila";
console.log(canNotAttend + " " + "cannot make for a dinner.");
let newGuest = "Shazia";
guests[guests.indexOf(canNotAttend)] = newGuest;
guests.map((items) => console.log(`Dear ${items} You are invited today for my birthday party dinner.`));
