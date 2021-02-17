//EXAMPLE

let count = 0;

while (count < 10) {
    console.log(count);
    count++;
}

/*
//USEFULNESS OF WHILE LOOP IN GAMING WHEN WE DON'T KNOW HOW MANY TURN IT WILL TAKE TO WIN THE GAME
while (!gameOver) {
    //player1 move
    //player2 move
}
//HERE YOU CAN PLACE MESSAGE FOR WINNER
*/

const secretPassword = "Pancakes";
let guess = prompt("Enter a secret password!");

while (guess !== secretPassword) {
    guess = prompt("Enter a secret password!");
}

console.log("You found a secret!");