const { type } = require("jquery");

let pattern = /xyz/;

let value = "This is just a test.";

let result = value.match(pattern);

console.log(result); // Output is null for this.

// console.log(typeof result); // Output is object for this.

if (result === null) {
    console.log("no match was found.");
}