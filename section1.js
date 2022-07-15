let x = 10;
if (x == 10) {
    let x = 20;
    // 20:  reference x inside the block
}
// 10: reference at the begining of the script

var a = 10;
//console.log(a); // 10

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
    //log(); // called outside TDZ
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
// 25

const RATE = 0.1;
//RATE = 0.2; // TypeError

// const RED; // SyntaxError


// JavaScript const and Objects

const person = { age: 20 };
person.age = 30; // OK
// 30

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
//console.log(colors); // ["red", "green"]

colors.pop();
colors.pop();
// []

//colors = []; // TypeError

let scores = [75, 80, 95];
for (const score of scores) {
    //console.log(score);
}

function say(message='Hi') {
    //console.log(message);
}

say(); // 'Hi'
say('Hello') // 'Hello'

function say(message) {
    message = typeof message !== 'undefined' ? message : 'Hi';
    //console.log(message);
}
say("Tyler"); // 'Hi'

let taxRate = () => 0.1;
let getPrice = function( price, tax = price * taxRate() ) {
    return price + tax;
}

let fullPrice = getPrice(100);
// 110

// Rest Parameters
let sum = (...args) => args.filter(e => typeof e === 'number').reduce((prev, curr) => prev + curr);
//let result = sum(10,'Hi',null,undefined,20); 


var showNumbers = new Function('...numbers', 'console.log(numbers)');
//showNumbers(1, 2, 3);

// Spread Operator
const odd = [1,3,5];
const combined = [2,4,6, ...odd];


let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

rivers.push(...moreRivers)


let spreadscores = [80, 70, 90];
let copiedScores = [...spreadscores];
// [80, 70, 90]

let chars = ['A', ...'BC', 'D'];
// ["A", "B", "C", "D"]

//Object Literal Syntax Extensions in ES6
let name = 'Computer',
    status = 'On';

let machine0 = {
   name,
   status
};

//console.log(machine0)

let prefix = 'machine';
let machine = {
    [prefix + ' name']: 'server',
    [prefix + ' hours']: 10000
};

//console.log(machine['machine name']); // server
//console.log(machine['machine hours']); // 10000

let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

//server['starting up']();

//JavaScript for…of Loop
let scores1 = [80, 90, 70];

for (const score of scores1) {
    //console.log(score);
}


let colors1 = ['Red', 'Green', 'Blue'];

for (const [index, color] of colors1.entries()) {
    //console.log(`${color} is at index ${index}`);
}

// Octal and Binary Literals
"use strict"
let c = 0o51; // invalid octal 


let f = 0b111; // 7

//Template Literals
let post = {
    title: 'JavaScript Template Literals',
    excerpt: 'Introduction to JavaScript template literals in ES6',
    body: 'Content of the post will be here...',
    tags: ['es6', 'template literals', 'javascript']
};

let { title, excerpt, body, tags } = post;

let postHtml = `
<article>
    <header>
        <h1>${title}</h1>
    </header>
    <section>
        <div>${excerpt}</div>
        <div>${body}</div>
    </section>
    <footer>
        <ul>
            ${tags.map(tag => `<li>${tag}</li>`).join('\n            ')}
        </ul>
    </footer>
</article>
`;

let firstName = 'Jhonny',
    lastName = 'Depp';

let greeting = `Hi ${firstName}, ${lastName}`;

let price = 8.99,
    tax = 0.1;

let netPrice = `Net Price:$${(price * (1 + tax)).toFixed(2)}`;

function format(literals, ...substitutions) {
    let result = '';
    
    for (let i = 0; i < substitutions.length; i++) {
        result += literals[i];
        result += substitutions[i];
        
    }

    result += literals[literals.length - 1];
    return result;
}

let quantity = 9,
    priceEach = 8.99,
    result = format`${quantity} items cost $${(quantity * priceEach).toFixed(2)}.`;
   
//console.log(result);



