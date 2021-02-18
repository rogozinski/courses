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
    } else if (input === "new") {
        const newTodo = prompt("Ok. What would you like to add?");
        //add new element to the array
        todoMemory.push(newTodo);
        //display confirmation
        console.log(`"${newTodo}" added to the list`);
    } else if (input === "delete") {
        const deleteTodo = parseInt(prompt("Which task would you like to remove"));
        //check if input is not a number
        if (!Number.isNaN(deleteTodo)) {
            //remove chosen by user item from our array
            const deleted = todoMemory.splice(deleteTodo, 1);
            //display confirmation
            console.log(`"${deleted}" removed to the list`);
        }
        else {
            //if input is not a number display this
            console.log("Unkown Index");
        }
    }
    //once task is accomplished ask what else we can do
    input = prompt("What would you like to do?");
}
console.log(">> OK, you quit the app <<");