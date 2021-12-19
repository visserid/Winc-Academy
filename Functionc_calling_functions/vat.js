// VAT exercise 1 

const vat = function(number){
    return (number * 0.21);  
};


const total = function(number){
    const addVat = vat(number) + number;
    return addVat;
 }; 


console.log(total(4));

//VAT exercise 2

const vat2 = function(number) {
    return number - (number / 1.21);
};

const basePrice = function(number){
    const price = number - vat2(number);
    const roundedPrice = Math.round(price);
    return [vat2(number), roundedPrice];
};

console.log(basePrice(8.50));