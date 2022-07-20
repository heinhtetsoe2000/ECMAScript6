class Person {
    constructor(name) {
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
}

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

app.start();