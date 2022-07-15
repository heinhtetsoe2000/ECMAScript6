// Array Destructuring
let numbers = [1, 2, 3, 4, 5];
let [one, two, ...three] = numbers;
//console.log(one, two, three);

let [user1, user2, user3] = ['Joe', 'Jhon', 'Tyler'];
//console.log(user1);

function getItems() {
  return [10, 20];
}

let items = getItems();

let thirdItem = items[2] != undefined ? items[2] : 0;
//console.log(thirdItem);

let fruits = ['apple', 'banana', 'coconut'];
let [fruit1, fruit2, fruit3, fruit4 = 'unknown'] = fruits;
//console.log(fruit4);

function getNull() {
  return null;
}

let [a = 10, b = 20] = getNull() || [];
//console.log(a, b);

function getProfile() {
  return [
    'Jhon',
    'Doe',
    ['Red', 'Green', 'Blue']
  ];
}

let [firstName, lastName, [color1, color2, color3]] = getProfile();
//console.log(firstName, lastName, color1, color2, color3);

let num1 = 12, num2 = 23;

[num1, num2] = [num2, num1];
//console.log(num1, num2);

function stat(a, b) {
  return [
    a + b,
    (a + b) / 2,
    a - b
  ];
}

let [sum, average, difference] = stat(20, 10);
//console.log(sum, average, difference);

// Object Destrcturing
let person = {
  fName: 'Jonny',
  lName: 'Depp'
};

let { fName: fName1, lName: lName1 } = person;
//console.log(fName1, lName1);

//let { fName, lName } = person;
// or
let fName, lName;

({ fName, lName } = person);
//console.log(fName, lName);

let human = {
  userName: 'Jhonny',
  familyName: 'Depp',
  currentAge: 28
};

let { userName, familyName, nickName = '', currentAge: age = 18 } = human;
//console.log(nickName, age);

let { gettingnull1, gettingnull2 } = getNull() || {};
//console.log(gettingnull1, gettingnull2);

let employee = {
  id: 1001,
  name: {
    uName: 'Tyler',
    famName: 'Joseph'
  }
};

let {
  name: {
    uName,
    famName
  },
  name
} = employee;

//console.log(uName, famName, name);

let display = ({fName,lName}) => console.log(`${fName} ${lName}`);

display(person);
