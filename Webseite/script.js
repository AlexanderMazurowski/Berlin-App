"use strict";

//Mustafa Demir’s Gemüse Kebap
//https://www.google.com/maps/place/Mustafa+Demir%E2%80%99s+Gem%C3%BCse+Kebap/@52.5094884,13.4497155,17.83z/data=!3m1!5s0x47a84e5b7a719811:0x810c919bcf16dd8d!4m5!3m4!1s0x47a84e58e23b7319:0x8069096b50d11cb6!8m2!3d52.5100384!4d13.451065
//döner
//Montag,11:00–02:00

const place1 = new Location(
  "Mustafa Gemüse Kebap",
  "döner",
  "//https://www.google.com/maps/place/Mustafa+Demir%E2%80%99s+Gem%C3%BCse+Kebap/@52.5094884,13.4497155,17.83z/data=!3m1!5s0x47a84e5b7a719811:0x810c919bcf16dd8d!4m5!3m4!1s0x47a84e58e23b7319:0x8069096b50d11cb6!8m2!3d52.5100384!4d13.451065",
  "sddw"
);
let res = place1.getCordinatesAndDistance();

console.log("cor");
console.log(place1.test1);
console.log(res);
console.log(place1);
