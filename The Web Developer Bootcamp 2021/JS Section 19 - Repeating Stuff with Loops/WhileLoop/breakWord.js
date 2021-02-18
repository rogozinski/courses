//first example
/*
let input = prompt("Hey, say something..");

while (true) {
    input = prompt(input.toLowerCase());
    if (input === "stop copying me") {
        break;
    }
}
alert("Okay, I will stop");
*/

//second example

for (let i = 0; i < 1000; i++) {
    console.log(i);
    if (i === 777) { break; }
}