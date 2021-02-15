/* let random = Math.random();

if (random < 0.5) {
    console.log("Your number is less than 0.5! ");
    console.log(random);
}

if (random >= 0.5) {
    console.log("Your number is greater than 0.5! ");
    console.log(random);
} */

/* const dayOfWeek = "Friday";

if (dayOfWeek === "Monday") {
    console.log("Mondays ain't that bad..");
}
else if (dayOfWeek === "Saturday") {
    console.log("Saturday!");
}
else if (dayOfWeek === "Friday") {
    console.log("It's Friday! Time to party! ");
else {
    console.log("MEH");
} */

// 0 - 5 - FREE
// 5 - 10 - CHILD $10
// 10 - 65 - ADULT $20
// 65 + SENIOR $10

const age = 5;
if (age < 5) {
    console.log("You're a baby. You get in for free")
}
else if (age < 10) {
    console.log("You're a child. You pay $10");
}
else if (age < 65) {
    console.log("You're an adult. You pay $20");
}
else {
    console.log("You're a senior. You pay $10");
}
