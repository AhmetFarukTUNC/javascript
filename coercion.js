let a = 7;

let b = "6";

let c = a + b;

console.log("Answer : " + c);

b = parseInt(b,10);

c = a + b;

console.log("Answer : " + c);

let d = parseInt("bob",10);//d is NaN.

let e = isNaN(d);// If d is NaN e is true

console.log(d);//Output is NaN.

console.log(e);//Output is true.

