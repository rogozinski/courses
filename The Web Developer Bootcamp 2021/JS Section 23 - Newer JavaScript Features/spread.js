/* SPREAD IN FUNCTION CALLS */
//example 1
Math.max(13, 4, 424, 23, 123, 125, 2131, 6642535); //6642535

const nums = [13, 4, 424, 23, 123, 125, 2131, 6642535];
Math.max(nums); //NaN; method doesn't see any  content of array. That#'s why we have to use "spread"

Math.max(...nums); //6642535

//example 2
console.log(nums);
console.log(...nums);

//example 3
console.log("asdad", "adasd", "asdsd", "asds");
console.log(..."fabulous");
