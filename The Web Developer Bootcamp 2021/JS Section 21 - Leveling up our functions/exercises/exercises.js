/* Exercise 44 - Function Expressions - Solution */
const square = function (num) {
    return num * num;
}

/* Exercise 45 - Methods - Solution */
const square = {
    area(side) {
        return side * side;
    },
    perimeter(side) {
        return side * 4;
    }
}

/* Exercise 46 - Egg Laying - Solution */
const hen = {
    name: "Helen",
    eggCount: 0,
    layAnEgg(eggCount) {
        this.eggCount++;
        return "EGG";
    }
};