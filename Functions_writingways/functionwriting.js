// Method 1

function result1 (num1, num2) {
    const math1  = (Math.pow(num1,2) + Math.pow(num2,2));
    const math2 = Math.pow(math1,2);
    return math2;
}

console.log(result1(2,3));

//method 2

const result2 = function (num1, num2) {
    const math1  = (num1 * num1) + (num2 * num2);
    const math2 = math1 * math1;
    return math2;
}; 

console.log(result2(2,3));

// method 3

const result3 = (num1, num2) => {
    const math1  = (num1 * num1) + (num2 * num2);
    const math2 = math1 * math1;
    return math2;
};

console.log(result3(2,3));