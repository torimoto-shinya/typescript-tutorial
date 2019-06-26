function add(x, y) {
    return x + y;
}
console.log(add(1, 3));
var myAdd = function (x, y) { return x + y; };
// Options 
function buildName(firstName, lastName) {
    if (lastName)
        console.log(firstName + " " + lastName);
    else
        console.log("" + firstName);
}
var result1 = buildName("Bob"); // works correctly now
var result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
// rest parameter
function rest_buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    console.log(firstName + " " + restOfName.join(" "));
}
var employeeName = rest_buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
