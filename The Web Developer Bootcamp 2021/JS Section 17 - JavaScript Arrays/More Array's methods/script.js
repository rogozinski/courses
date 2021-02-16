//Concat - fusion of two arrays
console.warn("Concatenation of two arrays");
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];

const array3 = array1.concat(array2);

console.log(array1);
console.log(array2);
console.log(array3);

//Includes - look for value
console.warn("Does array3 contains the letter b?");
console.log("Answer is: " + array3.includes("b"));

//array.indexOf
console.warn("What's index number of the letter d in the array3?");
console.log(" Answer is: " + array3.indexOf("d"));

//array.reverse() 
console.warn("Let's reverse items order in array3");
console.log(array3.reverse());
