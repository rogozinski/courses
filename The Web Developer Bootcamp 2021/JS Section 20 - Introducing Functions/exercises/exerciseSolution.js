/* Exercise 35 - Heart Function - Solution */
function printHeart() {
    console.log("<3");
}
//printHeart(); //uncomment to run

/* Exercise 36 - Rant - Solution */
function rant(message) {
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
    console.log(message.toUpperCase());
}
//rant("Yes, I can!");

/* Exercise 37 - Multiple Args - Solution */
function isSnakeEyes(eye1, eye2) {
    if (eye1 === 1 && eye2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}
//isSnakeEyes(1,1); //uncomment to run it or call it in console
//isSnakeEyes(2,4); //uncomment to run it or call it in console

/* Exercise 38 - Return Value Practice - Solution */
function multiply(x, y) {
    return x * y;
}

/* Exercise 39 - isShortsWeather - Solution */
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}