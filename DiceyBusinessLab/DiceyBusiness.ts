let diceArray = []; //global array
let divContainer = document.getElementById('container');

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; //generates random number for the die roll

let newDie = document.getElementById('createButton');
let reRoll = document.getElementById('rollTheDice');
let sumOfDice = document.getElementById('sumButton');

class Die {
    constructor() {
        this.div = document.createElement('div'); //creates a div
        this.div.classList.add('Die'); //assigns class to div
        divContainer.appendChild(this.div); //puts div into container
        diceArray.push(this); //adds die to the global array
        this.roll();        
        
        this.id = Date.now();
        this.div.setAttribute('id', this.id);
        
        //this.div.innerText = this.value; displays number on the die
        
        this.div.addEventListener('click', () => {
            this.roll();//this will roll a specific die when clicked
        });

        this.div.addEventListener('dblclick', () => {
            let deleteMe;

            diceArray.forEach((die, i) => {
                if (this.id == die.id) {
                    deleteMe = i;
                }
            });

            diceArray.splice(deleteMe, 1);
        
            document.getElementById(this.id).remove();
        });
    }

    roll() {
        this.value = randomNumber(1, 6); //roll function will generate random number between 1 and 6, assigns to the value
        this.div.innerText = this.value;
    };
}

newDie.addEventListener('click', function () {
    new Die();// creates a new instance of the Die object
});

reRoll.addEventListener('click', function () {
    diceArray.forEach((die) => {
        die.roll();
    });
});

sumOfDice.addEventListener('click', function () {
    let sumDice = 0;
    diceArray.forEach((die) => {
        sumDice += die.value
    });
    alert(`The sum of the dice is ${sumDice}`);
});