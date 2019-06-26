function identity(arg) {
    return arg;
}
var output = identity("myString"); // type of output will be 'string'
console.log(output);
function loggingIdentity(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var output2 = loggingIdentity(["myString", "myString2"]);
console.log(output2);
