let pattern = /xyz/; // This is a variable in object type.

console.log(pattern);

console.log(typeof pattern);

let value = "this is a xyz a test.";

console.log(pattern.test(value));

console.log(value.replace(pattern,"just"));

console.log(value.match(pattern));

console.log(value.match(pattern).index);

console.log(value.match(pattern).input);

console.log(value.match(pattern).groups);
