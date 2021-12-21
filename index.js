// "Welcome! What is your name?"

var user = prompt ("Welcome, What is your name?");
alert ("Hey " + user )
var lowestNumber = prompt ("What is the lowest number you want to play with?");
var highestNumber = prompt ("What is the highest number you want to playw with?")

alert ("Let's play");

var answer = Math.random() * highestNumber + lowestNumber ;

for (let guess = 0; guess < 4; guess++) {
    if (guess > answer) {
        prompt ("The number is too high!");
    } else if ( guess === answer){
        prompt ("CONGRATULATIONS! YOU WON!");
    } else {
        prompt ("The number is too low!");
    }
};
alert ("Bye " + user);