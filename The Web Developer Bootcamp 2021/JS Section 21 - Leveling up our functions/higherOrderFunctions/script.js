/* HIGHER ORDER FUNCTIONS */

//repeat function in the bracket twice
function callTwice(funcName) {
    funcName();
    funcName();
}

//repeat function in the bracket ten times
function callTenTimes(funcName) {
    for (let i = 0; i < 10; i++) {
        funcName();
    }
}

//actuall function that is going to be repeated 
function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

//callTwice(rollDie); //if we type rillDie() as an argument function will be launched immediately instead of as many times and callTwice() function says 

/* RETURNING FUNCTIONS */

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("CONGRATS, I AM A GOOD FUNCTION");
            console.log("YOU HAVE  WON DECENT AMOUNT OF MONEY!");
        }
    } else {
        return function () {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
            alert("STOP TRYING TO CLOSE THIS WINDOW!");
        }
    }
}
const mystery = makeMysteryFunc();
//console.log(mystery());




//factory function that makes a function for us
function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

const isChild = makeBetweenFunc(0, 18);
const isAdult = makeBetweenFunc(19, 64);
const isSenior = makeBetweenFunc(65, 120);

//testing age of the person
console.log(isChild(19));
console.log(isAdult(20));
console.log(isSenior(40));


/*
//we want this kind of functions to be coded automatically
function isBetween(num) {
    return num >= 50 && num <= 100;
}
function isBetween2(num) {
    return num >= 1 && num <= 10;
}
*/
