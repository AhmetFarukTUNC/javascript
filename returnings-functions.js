function one(){
    return one;
}

let value = one()

console.log(one());

console.log(value);

let value2 = one;

console.log(typeof value);

console.log(typeof one);

console.log(value2())

function two(){
    return function () {
        console.log("two")
      }
}

let myFunction = two();

myFunction();

function three() {
    return function () { 
        return "three"
     }
}

console.log(three()());