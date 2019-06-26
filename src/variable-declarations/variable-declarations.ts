// let

// for (let i = 0; i < 10; i++) {
//     //setTimeout(function() { console.log(i); }, 100 * i);
// }

// const
const numLivesForCat = 9;
const kitty = {
    name: "Aurora",
    numLives: numLivesForCat,
}

// all "okay"
kitty.name = "Rory";
kitty.name = "Kitty";
kitty.name = "Cat";
kitty.numLives--;

// Array destructuring
let input = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second); // outputs 2

function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f([1, 2]);

// Object destructuring
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
console.log(a);  // o.a
console.log(b);  // o.b

let { ...passthrough } = o;
let total = passthrough.a.length + passthrough.b + passthrough.c.length;
console.log(total);
console.log(o == passthrough);  //false
console.log(o === passthrough);  //false

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}