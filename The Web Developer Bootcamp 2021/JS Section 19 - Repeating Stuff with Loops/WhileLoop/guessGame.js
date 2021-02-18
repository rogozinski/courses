let maximumRange = parseInt(prompt("Enter the maximum number:"));

//while input is not a number keep asking for correct input
while (!maximumRange) {
    maximumRange = parseInt(prompt("Enter a valid number:"));
}
//display a message in the console to show guessing range
console.warn("Guess number from 1 to", maximumRange);

//generate random number from 1 to chosen by user range
const targetNum = Math.floor(Math.random() * maximumRange) + 1;

//let user enter his guess
let userGuess = prompt("Enter your guess");
//number of attemps should increase with each incorrect guess
let attempts = 1;

//input validation. if entered number is too high/too low display a message
while (parseInt(userGuess) !== targetNum) {
    if (userGuess === "q") {
        break;
    }
    attempts++;
    if (userGuess < targetNum) {
        userGuess = prompt("Your guess is too low. Please try again: ");
    }
    else if (userGuess > targetNum) {
        userGuess = prompt("Your guess is too high. Please try again: ");
    }
}

//if guessed is correct display this as an alert and display score in the console
if (userGuess === "q" || userGuess === "q") {
    console.log(`Ok, you quit!`);
} else {
    console.log(`Mysterious number: ${targetNum}. You guessed correctly!`);
    console.log(`Number of attempts: ${attempts}`);
}