const peopleClub = function (amount) {
    if (amount > 100) {
        return true;
    } else if (amount <= 100) {
        return false;
    } 

};

const howManyPeople = peopleClub(90);
// this function produces something

//console.log(howManyPeople);

const brendaBot = function  (amount, age) {
    if (age < 18) {
        return "this is a club for adults";
    } 
    if (amount < 100) {
        return "come in";
    } else if (amount >= 100) {
        return "it's too busy now, come back later";
    } 

};

//console.log(brendaBot(100,20));

const average = function(num1,num2,num3,num4,num5) {
    const sum = num1 + num2 + num3 + num4 + num5;
    const averageNum = sum / 5;
    return averageNum;
};

//console.log(average(101,34,65,44,35));