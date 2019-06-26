// See: https://www.typescriptlang.org/docs/handbook/basic-types.html
// Boolean
var isDone = false;
console.log("isDone: " + isDone);
// Number
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);
// String
var color = "blue";
color = 'red';
console.log(color);
// Template strings
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello my name is " + fullName + ".\n\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// Array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list);
console.log(list2);
// Tuple
// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
var x;
x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error
// Enum
// A helpful addition to the standard set of datatypes from JavaScript is the enum. 
var Color;
(function (Color) {
    Color[Color["Red"] = 2] = "Red";
    Color[Color["Green"] = 3] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[2];
console.log(c);
console.log(colorName);
// Any
var notSure = 4;
notSure = "maybe a string instead";
notSure = false;
// void
function warnUser() {
    console.log("This is my warning message");
}
var unusable = undefined;
// null and undefined
// Not much else we can assign to these variables!
var u = undefined;
var n = null;
// Never
// Function returning never must have unreachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must have unreachable end point
function infiniteLoop() {
    while (true) {
    }
}
var a;
console.log(typeof (a));
create({ prop: 0 });
