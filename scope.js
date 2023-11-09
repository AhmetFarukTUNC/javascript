let a = "first";

function scopeTest() {
    console.log(a);
    a = "Changed!"
    let b = "second"
    if(a != ""){
        console.log(a)
        console.log("Inside of : " + b)
    }

}

scopeTest();
console.log(a)