 let car = {
    make:"bmv",
    model:"745li",
    year:2010,
    
    getPrice:function () {
        return 5000;
      },
    printDescription:function () { 
        console.log(this.make + " " + this.model);
     }

 }

car.printDescription();
console.log(car.getPrice())
console.log(car["year"])

let anotherCar = {};

anotherCar.whatEver = "Ahmet";

console.log(anotherCar.whatEver);

var a ={
    myProperty:{b:"hi"}
}

console.log(a.myProperty.b)

let c = {
    myProperty:[
        {d:"this"},
        {e:"can"},
        {f:"get"},
        {g:"crazy"}
    ]
}

console.log(c.myProperty[0].d)
console.log(c.myProperty[1].e)
console.log(c.myProperty[2].f)
console.log(c.myProperty[3].g)