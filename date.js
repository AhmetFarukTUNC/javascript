let today = new Date();

let bob = new Date("December 7,1969 07:01:23");

let bob2 = new Date("1969-12-07T07:01:23");

let bob3 = new Date("1969,11,6");

let bob4 = new Date("1966,11,6,7,1,23");

var elapsedTime = today - bob;

console.log(elapsedTime);//It gives as milisecond elapsed time.

console.log(bob.getDate()); // 1 is equal to Monday and 7 is Sunday.

console.log(today.getDate());// It gives which is the day today?

console.log(bob.getTime());// It gives what time is it as  milisecond. 


