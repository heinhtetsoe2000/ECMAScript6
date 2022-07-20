class Person {
    constructor(name) {
        if(!new.target) {
            throw "must use new operator with Person";
        }
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty.';
        }
        this._name = newName;
    }

    static createAnonymous(gender) {
        let name = gender === 'male' ? 'John Doe' : 'Jahn Doe';
        return new Person(name);
    }
}

let anonymous = Person.createAnonymous('male');

let john = new Person('John Doe');
john.name = 'Jaden Smith';
// console.log(john.name);

let meeting = {
    attendees: [],
    add(attendee) {
        // console.log(`${attendee} has joined the meeting.`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
};

meeting.add('John').add('Samira').add('Jack');
// console.log(`The latest attendee is ${meeting.latest}.`);

function factory(aClass) {
    return new aClass();
}

let greeting = factory(class {
    sayHi() { console.log('Hi!') };
})

// greeting.sayHi();

let app = new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`This ${this.name} is starting.`);
    }
}('Awesome App');

// app.start();

new class {
    constructor(name) {
        this.name = name;
    }
    start() {
        console.log(`Starting the ${this.name}...`);
    }
}('New App');

class Item {
    constructor(name, quantity) {
        this.name = name;
        this.quantity = quantity;
        this.constructor.count++;
    }
    static count = 0;

    static get count() {
        return Item.count++;
    }
}

let pen = new Item('Pen', 5);
let noteBook = new Item('Note Book', 2);

// console.log(Item.count);

let propName = 'c';

const rank = {
    a: 1,
    b: 2,
    [propName]: 3,
};

// console.log(rank.c);

let name = 'fullName';

class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get [name]() {
        return `${this.firstName} ${this.lastName}`;
    }
}

let customer = new Customer('Tyler', 'One');
// console.log(customer.fullName);

class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log(`Walking on ${this.legs} legs.`);
    }
}

class Bird extends Animal {
    constructor(legs, color) {
        super(legs);
        this.color = color;
    }
    fly() {
        console.log(`Flying...`)
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
}

let bird = new Bird(2, 'brown');
bird.walk();
console.log(bird.color);

