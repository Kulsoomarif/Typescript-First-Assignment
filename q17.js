//Q17:
// 1.
var guests = ["Sumaira", "Amna", "Shazia", "Shomaila", "Sara", "Nazia", "Sania"];
guests.map(function (items) { return console.log("Dear ".concat(items, " sorry for inconvineint I can invite only two people for dinner because table is too small.")); });
console.log("\n");
// 2.    3.
while (guests.length > 2) {
    var poped = guests.pop();
    console.log("Dear ".concat(poped, " sorry for inconvineint I cannot invite you for dinner."));
}
// 4.
guests.pop();
guests.pop();
console.log("My final list is:", guests);
