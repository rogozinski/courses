
/* TRY looks for any error in our code. To make it fully work we need a CATCH. Which contains instructions which will be executed in case if error is found.  */

/*
try {
    hello.toUpperCase();
} catch {
    console.log("ERROR!!");
}
console.log("After errors!!");
*/

//example 2
function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3));
    } catch (e) {
        console.log("Please pass a string next time!");
    }
}