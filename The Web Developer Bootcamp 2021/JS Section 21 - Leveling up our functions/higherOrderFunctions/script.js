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

callTwice(rollDie); //if we type rillDie() as an argument function will be launched immediately instead of as many times and callTwice() function says 