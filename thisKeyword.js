function first() {
    return this;
}

console.log(first() === global);

function second() { 
    "use strict"
    return this
 }

console.log(second() === global);

console.log(second() === undefined);

let myObject = {value:"My Object"};

global.value = "Global Object";

function third(name) { 
   return this.value + " " + name;
}

console.log(third());

console.log(third.call(myObject,"bob"))

console.log(third.apply(myObject,["bob"]))

function fourth() { 
    console.log(this.firstName + " " + this.lastName);
 }

let customer1 = {
    firstName:"Bob",
    lastName:"Tabor",
    print:fourth
}

let customer2 = {
    firstName:"Bob",
    lastName:"Tabor",
    print:fourth
}

customer1.print();

customer2.print();


