class Car{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    print(){
        console.log(`${this.make} ${this.model} (${this.year})`);
    }
}

let myCar = new Car("bmw","745li",2010);

myCar.print();

class SportsCar extends Car{
    revEngine(){
        console.log("Vrrroom goes the " + this.model);
    }
}

let mySportCar = new SportsCar("dodge","viper",2011);

mySportCar.print();

mySportCar.revEngine();