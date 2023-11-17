let a, b, c, d, e;
let names = ["David","Eddie","Alex","Michael","Sammy"];
[a, b, c, d, e] = names;

console.log(a);
console.log(b);
console.log(c);
console.log(e);
console.log(d);

let others;

[a,b, ...others] = names;

console.log(a);

console.log(b);

console.log(others);

let year,model;

({year,model} = {
    make:"bmw",
    model:"745li",
    year:2010,
    value:500
});

console.log(year);

console.log(model);