const prompt = require('prompt-sync')();

// function that provides the starting game menu
const startMenu = () => {
    console.log(`Welcome to Simple RPG! Please select from one of the following options:
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

// ask the user their characters name (prevent numbers from being used)
const allowedCharacterName = (name) => {
    const letters = /^[A-Za-z]+$/;
    return letters.test(name);
}

let characterName;

while (true) {
    characterName = prompt("What is your character's name?: ")

    const verifyCharacterName = allowedCharacterName(characterName);

    if (verifyCharacterName) {
        console.log("Name is valid");
        break;
    } else {
        console.log("Name is not valid, please enter a valid name - letters only");
    }
}

// transform the first letter of the name to upper case

characterName = characterName.charAt(0).toUpperCase() + characterName.slice(1);

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

// loop until user makes a valid class choice and assign it to the characterClass var
while (true) {
    classMenu();
    let classChoice = prompt("Enter your choice: ");
    if (classChoice === "1") {
        characterClass = "Witch Hunter";
        break;
    } else if (classChoice === "2") {
        characterClass = "Barbarian";
        console.log(`Player chose ${characterClass}, but this class doesn't exit yet.`);
    } else if (classChoice === "3") {
        characterClass = "Warlock";
        console.log(`Player chose ${characterClass}, but this class doesn't exit yet.`);
    } else if (classChoice === "4") {
        characterClass = "Paladin";
        console.log(`Player chose ${characterClass}, but this class doesn't exit yet.`);
    } else if (classChoice === "5") {
        characterClass = "Shaman";
        console.log(`Player chose ${characterClass}, but this class doesn't exit yet.`);
    } else {
        console.log("Please make a valid selection.");
    }
}

let characterStats = {
    "name": characterName,
    "class": characterClass,
    "level": 1
}

// assign basic stats based on class
if (characterStats["class"] === "Witch Hunter") {
    characterStats.vitality = 10;
    characterStats.strength = 10;
    characterStats.wisdom = 10;
    characterStats.agility = 10;
    characterStats.intelligence = 10;
}

console.log(`It has been written: you are ${characterStats["name"]} the ${characterStats["class"]}.`);
console.log("Prepare yourself...")

console.log("Current character stats: ");
console.log(characterStats);

// character stats function
const showCharacterStats = () => {
    console.log(characterStats);
}

console.log("Anytime a prompt is displayed, type 'stats' to view your characters 'stats'");

while (true) {
    let playerDecision = prompt("Try it now: ");
    if (playerDecision.toLowerCase() === "stats") {
        showCharacterStats();
        break;
    } else {
        console.log("Try entering 'stats' to view your characters stats.");
    }
}