var count = 3;

if (count == 4) {
    console.log("Count is 4")
}

else if(count>4){
   console.log("Count ia greater than four.")
}

else if (count<4) {
    console.log("Count is less than four.")
}

else{
    console.log("Count is not 4.")
}

let hero = "Batman";

switch (hero.toLowerCase()) {
    case "superman":
        console.log("Super strength")
        console.log("x-ray vision")
        break;
    case "batman":
        console.log("Intelligence")
        console.log("Fighting skills")
        break;
    default:
        console.log("member of JLA")
}

let a = 1,b ="1";

let result = (a==b) ? "equal":"inequal";
console.log(result);
let result2 = (a===b) ? "equal":"inequal";
console.log(result2);
