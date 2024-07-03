"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
//Q16: 
// 1.
var guests = ["Amna", "Shazia", "Shomaila", "Nazia"];
exports.guests = guests;
guests.map(function (items) { return console.log("Dear ".concat(items, " Good news!! we found a new bigger dinner table..")); });
console.log("\n");
// 2.
guests.unshift("Sumaira");
// 3.
guests.splice(3, 0, "Sara");
// 4.
guests.push("Sania");
// 5.
for (var _i = 0, guests_1 = guests; _i < guests_1.length; _i++) {
    var guestList = guests_1[_i];
    console.log("Hello ".concat(guestList, " I am inviting you for my birthday party dinner"));
}
