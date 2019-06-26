// See: https://www.typescriptlang.org/docs/handbook/basic-types.html

// Boolean
let isDone: boolean = false;
console.log(`isDone: ${isDone}`);

// Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal);
console.log(hex);
console.log(binary);
console.log(octal);

// String
let color: string = "blue";
color = 'red';
console.log(color);

// Template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;
console.log(sentence);

// Array
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];
console.log(list);
console.log(list2);

// Tuple
// Tuple types allow you to express an array where the type of a fixed number of elements is known, but need not be the same.
let x: [string, number];

x = ["hello", 10]; // OK
// x = [10, "hello"]; // Error


// Enum
// A helpful addition to the standard set of datatypes from JavaScript is the enum. 
enum Color {Red = 2, Green, Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
console.log(c);
console.log(colorName);

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// void
function warnUser(): void {
    console.log("This is my warning message");
}

let unusable: void = undefined;

// null and undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Never
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}
let a: never;
console.log(typeof(a));
// a = fail(); 

// Object

declare function create(o: object | null): void;

create({prop: 0});

// Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
strLength = (someValue as string).length;

