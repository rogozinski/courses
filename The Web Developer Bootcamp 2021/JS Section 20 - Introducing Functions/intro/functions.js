function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

//singSong(); //uncomment to run it or call it in console

function greetUser(firstName, lastName) {
    console.log(`Good evening ${firstName} ${lastName[0]}. <3`);

}
//greetUser("Michal", "Rogozinski"); //uncomment to run it or call it in console

function repeat(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;

    }
    console.log(result);
}
//repeat("Hi", 5); //uncomment to run it or call it in console

function add(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return false;
    }
    return x + y;
}
