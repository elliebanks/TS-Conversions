"use strict";
var diceArray = []; //global array
var divContainer = document.getElementById('container');
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
; //generates random number for the die roll
var newDie = document.getElementById('createButton');
var reRoll = document.getElementById('rollTheDice');
var sumOfDice = document.getElementById('sumButton');
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = document.createElement('div'); //creates a div
        this.div.classList.add('Die'); //assigns class to div
        divContainer.appendChild(this.div); //puts div into container
        diceArray.push(this); //adds die to the global array
        this.roll();
        this.id = Date.now();
        this.div.setAttribute('id', this.id.toString());
        //this.div.innerText = this.value; displays number on the die
        this.div.addEventListener('click', function () {
            _this.roll(); //this will roll a specific die when clicked
        });
        this.div.addEventListener('dblclick', function () {
            var deleteMe;
            diceArray.forEach(function (die, i) {
                if (_this.id == die.id) {
                    deleteMe = i;
                }
            });
            diceArray.splice(deleteMe, 1);
            var elToRemove = document.getElementById(_this.id.toString());
            elToRemove.remove();
        });
    }
    Die.prototype.roll = function () {
        this.value = randomNumber(1, 6); //roll function will generate random number between 1 and 6, assigns to the value
        this.div.innerText = this.value.toString();
    };
    ;
    return Die;
}());
newDie.addEventListener('click', function () {
    new Die(); // creates a new instance of the Die object
});
reRoll.addEventListener('click', function () {
    diceArray.forEach(function (die) {
        die.roll();
    });
});
sumOfDice.addEventListener('click', function () {
    var sumDice = 0;
    diceArray.forEach(function (die) {
        sumDice += die.value;
    });
    alert("The sum of the dice is " + sumDice);
});
