import validate from "./StaticZipCodeValidator";
import validator from "./ZipCodeValidator";

let strings = ["Hello", "98052", "101"];

// バリデート関数を使用する
strings.forEach(s => {
  console.log(`"${s}" ${validate(s) ? " matches" : " does not match"}`);
});

let myValidator = new validator();
