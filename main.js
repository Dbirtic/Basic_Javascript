/*console.log("Hello Son!");
console.error("Error Boi!");
console.warn("Warning Boi!");*/

// var, let and const - var is global and don't use it no more
// ES6 give let and const
// with let you can reassign values
// const has constant values and can't be directly reassigned, needs initialization always, with arrays you can change value inside but can't reassign the value of the whole array

let age = 30;

console.log(age);

age = 31;

console.log(age);

const age_2 = 15;

//age_2 = 16;

// strings, numbers, boolean, null, undefined, symbols

const name = 'John';
const dob = 30;
const isCool = true;
const rating = 3.5;
const x = null;
const y = undefined;
let z;   // will be undefined

console.log(typeof z);

// strings
// concatenation

console.log("My name is " + name + " and my age is " + dob);

// template strings or literals

console.log(`My name is ${name} and my age is ${dob}`); // back tags which are altgr + 7

// string properties and methods

const s = "Hello World";

console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 6));
console.log(s.split(" "));
console.log(s.split(""));

// arrays

const array = new Array(1, 2, 3, 4, 5);

console.log(array);

const fruits = ["apples", "pears", "cheries", "oranges"];

console.log(fruits);

fruits[5] = "ananases";

console.log(fruits[5]);

fruits.push("mangos");

console.log(fruits[6]);

// object literals
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    hobbies: ["music", "movies", "sports"],
    address: {street: "Mean street",
    city: "Boston"}
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.address.city, person.address.street);

// pulling things out

const {firstName, lastName, address:{city}} = person;

console.log(firstName, lastName, city);

person.email = "john.doe@gmail.com";

console.log(person.email);

// array of objects

const todo = [
    {
        id: 1,
        text: "hey y'all",
        activity: "dying",
        isCompleted: false
    },
    {
        id: 2,
        text: "what am I doing",
        activity: "living",
        isCompleted: false
    },
    {
        id: 3,
        text: "Meeting with the boss",
        activity: "work",
        isCompleted: true
    }
]

console.log(todo[2].text);

// make an object into a json

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

// loops
// for loops

for(let i = 0; i < 10; i++)
{
    console.log("damn");
}

// while loop

let i = 0;
while(i < 10){
    console.log(`˙while loop counter ${i}`);
    i++;
}

for(let i = 0; i < todo.length; i++)
{
    console.log(`${todo[i].text}`);
}

// for of loop
for(let item of todo){
    console.log(item);
}

// high order array methods
// forEach, map, filter
todo.forEach(function(item){ // callback function takes the item of an array
    console.log(item);
});

const justTheText = todo.map(function(item){ // map returns an array
    return item.text;
});

console.log(justTheText);

const isActivity = todo.filter(function(item){ // takes out only one property
    return item.isActivity;
});

const isCompletedVar = todo.filter(function(item){
    return item.isCompleted === true;
});

console.log(isActivity);

console.log(isCompletedVar);


// conditionals
// if statements

const ex = 20;

if(ex === 10) // double equal is checking if it's true or false, === checks if its the same and if it's the same data type
{
    console.log("ex is 10");
}
else if(ex < 10){
    console.log("ex is less than 10");
}
else
{
    console.log("ex is not 10");
}

// terniary operator

const color = rating > 3 ? "blue" : "green";

console.log(color);

switch(color)
{
    case 'blue':
        console.log("Colour is blue.");
        break;
    case 'green':
        console.log("Colour is green.");
        break;
    default:
        console.log(`Colour is ${color}.`);
        break;
}

// functions

function addNums(a, b) // values can be set to defaults but if the function is called without given values that the console will say 'NaN' = not a number
{
    return a + b;
}

console.log(addNums(2, 4)); 

// arrow functions
const addNums2 = (a = 1, b = 2) => {
    return a + b;
}

const addNums3 = a => a + 10;

console.log(addNums3(2));

// OOP
// constructor function - ES5
function Person(name, surname, dateOfBirth){
    this.name = name;
    this.surname = surname;
    this.dateOfBirth = dateOfBirth;
    this.getFullName = function(){
        return `${this.name} ${this.surname}`;
    }
}

// Instantiate object

const person1 = new Person("Brad", "Paisley", "6.6.1985");

console.log(person1.getFullName());

// Class - ES6

class Dumbass { // same as constructor just prettier
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// DOM

//console.log(window.top);

// single element selectors
document.getElementById('my-form');
document.querySelector('.container');   // similar to jQuery but newer


// multiple element selectors

const items = document.querySelectorAll('.item');     // for selecting more elements at once, a bit newer, can select everything

items.forEach((item) => console.log(item));

// manipulating the DOM

const ul = document.querySelector('.items');

//ul.remove(); // for removing this element
//ul.lastElementChild.remove(); // removing the last element from the list
/*ul.firstElementChild.textContent = 'hello';
ul.children[1].innerText = "Brad";
ul.lastElementChild.innerHTML = '<h1>Hello</h1>'; // */

// Events

const btn = document.querySelector('.btn');
btn.style.background = 'red';
/*
btn.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#my-form').style.background = '#ccc';
    //document.querySelector('body').classList.add('bg-dark');
});  //*/

// Form script

const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myform.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value === "" || emailInput.value === ""){
        msg.classList.add('error');
        msg.innerHTML = "Please don't leave empty fields.";
        setTimeout(function(){
            msg.remove();
        }, 3000); // remove message after 3 sec
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // clear the fields
        nameInput.value = "";
        emailInput.value = "";
    }
}