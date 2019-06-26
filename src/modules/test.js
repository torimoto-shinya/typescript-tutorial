"use strict";
exports.__esModule = true;
var StaticZipCodeValidator_1 = require("./StaticZipCodeValidator");
var ZipCodeValidator_1 = require("./ZipCodeValidator");
var strings = ["Hello", "98052", "101"];
// バリデート関数を使用する
strings.forEach(function (s) {
    console.log("\"" + s + "\" " + (StaticZipCodeValidator_1["default"](s) ? " matches" : " does not match"));
});
var myValidator = new ZipCodeValidator_1["default"]();
