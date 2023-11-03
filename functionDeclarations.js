function sayHello() {
    console.log("-----------------------")
    console.log("Hello");
    console.log("-----------------------")
  }

sayHello();

let a =sayHello;

a();

function sayHelloWithName(name) {
    console.log("----------------------");

    console.log("Hello " + name);

    console.log("----------------------");

  }

sayHelloWithName("Bob");

sayHelloWithName("Beth");

sayHelloWithName("Mr.Tibbles");

function calculateTax(price){
    let result = price * 0.0825;

    return result;
}

let tax = calculateTax(100);

console.log(tax);


