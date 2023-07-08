const prompt = require('prompt-sync')();

// function that provides the starting game menu
const startMenu = () => {
    console.log(`Welcome! Please select from one of the following options:
    1. Start game
    2. Quit
    `);
}

// loop until player makes a valid choice
while (true) {
    startMenu();
    let userInput = prompt("Enter your choice: ");
    if (userInput === "1") {
        break;
    } else if (userInput === "2") {
        return;
    } else {
        console.log("Please make a valid choice.")
    }
}

console.log("user chose start game, game is continuing");

// starting game section

// ask the user their characters name
let characterName = prompt("What is your character's name?: ")

console.log(characterName);

// choose class - currently only 1 class: witch hunter. others will be added later
const classMenu = () => {
    console.log(`Please choose your class:
    1. Witch Hunter
    2. Barbarian
    3. Warlock
    4. Paladin
    5. Shaman
    `);
}

let characterClass;

// loop until user makes a valid class choice
while (true) {
    classMenu();
    let classChoice = prompt("Enter your choice: ");
    if (classChoice === "1") {
        characterClass = "Witch Hunter";
        break;
    } else {
        console.log("Please make a valid choice.");
    }
}

console.log(`Player has chosen the ${characterClass} class!`)