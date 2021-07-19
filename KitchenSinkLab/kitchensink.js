"use strict";
// name variable
var firstName = "Ellie";
// number of US States as constant variable that will not change
var usStates = 50;
// compute the sum of 5 and 4
var sumStates = usStates + 4;
var sumStates2 = usStates + 5;
/*let sum = 5 + 4;
console.log(sum);*/
// create sayHello function with hello world alert
function sayHello() {
    alert("Hello World!");
}
;
// call function for sayHello
sayHello();
// create function with two arguments
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
;
// call function to take name and age and if age is less than 21 show alert message
var users = [
    { name: "Charles", age: 21 },
    { name: "Abby", age: 27 },
    { name: "James", age: 18 },
    { name: "John", age: 17 },
];
users.forEach(function (user) {
    checkAge(user.name, user.age);
});
/*
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
*/
// create array of fav vegetables
var favVeggies = ['broccoli', 'asparagus', 'corn', 'potato'];
// create loop to display fav vegetables
for (var i = 0; i < favVeggies.length; i++) {
    console.log(favVeggies[i]);
}
;
// create object with name and breed properties of pet
var pet = {
    name: 'Blu',
    breed: 'collie'
};
console.log(pet.name, pet.breed);
// create array of 5 objects, each with name and age
/*interface People {
    name: string;
    age: number;
}*/
/* class People {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
} */
var people = [
    {
        name: 'Liz',
        age: 278
    },
    {
        name: 'Bethany',
        age: 25
    },
    {
        name: 'Jan',
        age: 60
    },
    {
        name: 'Jessica',
        age: 15
    },
    {
        name: 'Michael',
        age: 16
    }
];
// create loop to call checkAge function for each object in array
people.forEach(function (people) {
    checkAge(people.name, people.age);
});
//I have no idea if I am doing this right or not !
// create a function called getLength that takes any word as an argument and returns number of characters
function getLength(word) {
    var wordLength = word.length;
    if (wordLength % 2 == 0) {
        console.log('The world is nice and even!');
    }
    else {
        console.log('The world is an odd place!');
    }
}
;
// call getLength function
getLength('Hello World!');
// store the return of getLength function as a variable
// determine if the return of function is an even or odd number and display message
