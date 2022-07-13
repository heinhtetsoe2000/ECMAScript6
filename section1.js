let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script

var a = 10;
console.log(a); // 10

//for (let i = 0; i < 5; i++) {
//    setTimeout(() => console.log(i), 1000);
//}

{ // enter new scope, TDZ starts
    let log = function () {
        console.log(message); // messagedeclared later
    };

    // This is the TDZ and accessing log
    // would cause a ReferenceError

    let message= 'Hello'; // TDZ ends
    log(); // called outside TDZ
}

//{ // TDZ starts
//    console.log(typeof myVar); // undefined
//    console.log(typeof message); // ReferenceError
//    let message; // TDZ ends
//}

// Notice that myVar variable is a non-existing variable, therefore, its type is undefined.
// The temporal death zone prevents you from accidentally referencing a variable before its declaration.

// Difference between let vs var

// JavaScript const: Declaring Constants in ES6
const CONSTANT_NAME = "value";

let b = 10;
b = 20;
b = b + 5;
console.log(a); // 25

const RATE = 0.1;
//RATE = 0.2; // TypeError

// const RED; // SyntaxError


// JavaScript const and Objects

const person = { age: 20 };
person.age = 30; // OK
console.log(person.age); // 30

//person = { age: 40 }; // TypeError

const person1 = Object.freeze({age: 20});
person1.age = 30; // TypeError

const company = Object.freeze({
    name: 'ABC corp',
    address: {
        street: 'North 1st street',
        city: 'San Jose',
        state: 'CA',
        zipcode: 95134
    }
});

company.address.country = 'USA'; // OK


// JavaScript const and Arrays

const colors = ['red'];
colors.push('green');
console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
console.log(colors); // []

//colors = []; // TypeError

let scores = [75, 80, 95];
for (const score of scores) {
    console.log(score);
}

function say(message='Hi') {
    console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    console.log(message);
}
say("Tyler"); // 'Hi'

let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
console.log(fullPrice); // 110

// Rest Parameters
let sum = (...args) => args.filter(e => typeof e === 'number').reduce((prev, curr) => prev + curr);
let result = sum(10,'Hi',null,undefined,20); 
console.log(result);

var showNumbers = new Function('...numbers', 'console.log(numbers)');
showNumbers(1, 2, 3);

// Spread Operator
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);

let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

rivers.push(...moreRivers)
console.log(rivers)

let spreadscores = [80, 70, 90];
let copiedScores = [...spreadscores];
console.log(copiedScores); // [80, 70, 90]

let chars = ['A', ...'BC', 'D'];
console.log(chars); // ["A", "B", "C", "D"]

//Object Literal Syntax Extensions in ES6
let name = 'Computer',
    status = 'On';

let machine0 = {
   name,
   status
};

console.log(machine0)

let prefix = 'machine';
let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

console.log(machine['machine name']); // server
console.log(machine['machine hours']); // 10000

let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['starting up']();

//JavaScript for…of Loop
let scores1 = [80, 90, 70];

for (const score of scores1) {
    console.log(score);
}

console.log(scores1)

let colors1 = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors1.entries()) {
    console.log(`${color} is at index ${index}`);
}

// Octal and Binary Literals
"use strict"
let c = 0o51; // invalid octal 
console.log(c);

let f = 0b111;
console.log(f); // 7