function add(x: number, y: number): number {
    return x + y;
}

console.log(add(1, 3));

let myAdd: (x: number, y: number) => number 
= function(x: number, y: number): number { return x + y;}

// Options 
function buildName(firstName: string, lastName?: string): void{
    if (lastName)
        console.log(`${ firstName } ${ lastName }`);
    else
        console.log(`${ firstName }`);
}

let result1 = buildName("Bob");                  // works correctly now
let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
let result3 = buildName("Bob", "Adams");         // ah, just right

// rest parameter

function rest_buildName(firstName: string, ...restOfName: string[]) {
    console.log(`${ firstName } ${ restOfName.join(" ") }`)
}

let employeeName = rest_buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
