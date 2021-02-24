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

/* SPREAD WITH ARRAY LITERALS */
//example 1
const cats = ["Blue", "Scout", "Rocket"];
const dogs = ["Rusty", "Wyatt"];

const allPets = [...cats, ...dogs];
console.log(allPets);

/* SPREAD WITH OBJECTS */
//example 1
const feline = { legs: 4, family: "Felidae" };
const canine = { isFurry: true, family: "Caninae" };

console.log({ ...feline });
const catDog = { ...feline, ...canine };

//example 2
const dataFromForm = {
    email: "blueman@gmail.com",
    password: "tobias123!",
    username: "tfunke"
}

const newUser = { ...dataFromForm, id: 2541, isAdmin: false };

