class Greeter {
    greeting: string;
    constructor (message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${ this.greeting }`;
    }
}

let greeter = new Greeter("world");

// Inheritance（継承）

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${ this.name } moved ${distanceInMeters}m`);
    }
}

class Dog extends Animal {
    bark(): void {
        console.log('Woof! Woof!')
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name) } // 親コンストラクタを呼び出すためにsuper()を使う必要がある
    move(distanceInMeters = 5) {
        console.log("slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

const dog = new Dog("tama");
dog.bark();
dog.move(10);
dog.move();
dog.bark();

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

// Accessors
let passcode = "secret passcode";

class Employee {
    private _fullName!: string | "";

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}

let employee = new Employee();
employee.fullName = "Bob Smith";

if (employee.fullName) {
    console.log(employee.fullName);
}
