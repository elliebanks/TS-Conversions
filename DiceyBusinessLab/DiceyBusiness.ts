let diceArray: Die[] = []; //global array
let divContainer = <HTMLDivElement>document.getElementById('container');

function randomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}; //generates random number for the die roll

let newDie = <HTMLButtonElement>document.getElementById('createButton');
let reRoll = <HTMLButtonElement>document.getElementById('rollTheDice');
let sumOfDice = <HTMLButtonElement>document.getElementById('sumButton');

class Die {
    div: HTMLDivElement;
    value!: number;
    id: number;
    

    constructor() {
        this.div = document.createElement('div'); //creates a div
        this.div.classList.add('Die'); //assigns class to div
        divContainer.appendChild(this.div); //puts div into container
        diceArray.push(this); //adds die to the global array
        this.roll();        
        
        this.id = Date.now();
        this.div.setAttribute('id', this.id.toString());
        
        //this.div.innerText = this.value; displays number on the die
        
        this.div.addEventListener('click', () => {
            this.roll();//this will roll a specific die when clicked
        });

        this.div.addEventListener('dblclick', () => {
            let deleteMe: any;

            diceArray.forEach((die, i) => {
                if (this.id == die.id) {
                    deleteMe = i;
                }
            });

            diceArray.splice(deleteMe, 1);
        
            const elToRemove = <HTMLDivElement>document.getElementById(this.id.toString());
            elToRemove.remove();
        });
    }

    roll() {
        this.value = randomNumber(1, 6); //roll function will generate random number between 1 and 6, assigns to the value
        this.div.innerText = this.value.toString();
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