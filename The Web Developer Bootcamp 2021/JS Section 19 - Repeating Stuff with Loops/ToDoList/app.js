let input = prompt("What would you like to do?");
const todoMemory = ["Buy some groceries", "Pay bills"];


while (input !== "quit" && input !== "q") {


    //check if input is "list" so we're going to display our list
    if (input === "list") {
        console.log("***************");
        //write down all element from arrat todoMemory
        for (let i = 0; i < todoMemory.length; i++) {
            console.log(i, todoMemory[i]);
        }
        console.log("***************");
    }
    //once task is accomplished ask what else we can do
    input = prompt("What would you like to do?");
}
console.log(">> OK, you quit the app <<");