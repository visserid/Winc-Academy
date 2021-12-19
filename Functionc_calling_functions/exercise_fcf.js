
const checkAge = function (number) {
    if (number >= 18){
        return true; 
    } else {
        return false;
    }
};

const age = function(number) {  
    if (checkAge(number)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};
console.log(age(15));
console.log(age(21));