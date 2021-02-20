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

/* Exercise 40 - Last Element - Solution */
function lastElement(x) {
    if (x.length === 0) {
        return null;
    }
    return x[x.length - 1];
}

/* Exercise 41 - Capitalize - Solution */
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
}

/* Exercise 42 - SumArray - Solution */
/*
//FIRST SOLUTION
function sumArray(x) {
    let totalSum = 0;
    for (let i = 0; i < x.length; i++) {
        totalSum += x[i];
    }
    return totalSum;
}
*/
//SECOND SOLUTION
function sumArray(arrayItems) {
    let totalSum = 0;
    for (let x of arrayItems) {
        totalSum += x;
    }
    return totalSum;
}

/* Exercise 43 - Days Of The Week - Solution */
const weekDays = ["", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function returnDay(dayNumber) {
    if (dayNumber < 1 || dayNumber > 7) {
        console.warn("Enter a valid number of the day");
        return null;
    }
    return weekDays[dayNumber];
}


