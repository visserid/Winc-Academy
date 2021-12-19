// 1

const person = {
    name: 'Ineke',
    age: 33,
    evaluations:[7,10,9]
};

//2,3,4
console.log(person);
console.log(person.name);
console.log(person.age);

// 6
console.log(person['name']);
console.log(person['age']);

//8.
console.log(person.evaluations);

// value is [7, 10, 9]

//Part 2: Arrays

var colors = ["green", "blue", "red"];

console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors[2]);

colors.push("yellow");
colors.push(5);
colors.push({greeting: "hi, I am an object"});

console.log(colors[5]);