 
const age = 30;
const isFemale = true;
const driverStatus = 'bob';
const firstName = 'bram';
const totalAmount = 25;

if (age >= 18){

    console.log("Welcome to the pub!");

    } else if (age <= 18){

    console.log("You are too young!");
} 

if (age >= 18 && age <= 25){
    console.log("You get 50% off!");
} else {
    console.log("No discount for you, old fart!");
}

if (isFemale) {

    console.log("Welcome girl!");

} else {
    console.log("It's ladies night, no boys allowed!");
}

if (driverStatus) {
    console.log("You can drive!");
} else {
    console.log("You can't drive");
}

if (firstName === ('bram') ||  firstName===('sarah')) {
    console.log("You get a free beer!");
} else {
    console.log("You can pay for your beer!");
}

if (totalAmount > 25){
   console.log("You're getting free bitterballs!");
} else if (totalAmount > 50) {
    console.log("Free nacho's for you!!");
} else {
    console.log("Spend more money to get a gift");
}