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

//slice part of array. we can define from where to where we can slice our array BUT if we won't save it under some variable then we won't see any change. That's why I needed to define new variable called slicedColors
let colors = ["red", "black", "blue", "yellow", "pink", "green"];
console.warn("Our new array with the colors");
console.log(colors);

console.log("Lets slice some of them");
let slicedColors = colors.slice(3);
console.log(slicedColors);

//splice
//we're missing February
let months = ["January", "March", "April"];
console.warn("Months of the year: " + months);
//we added February
months.splice(1, 0, "February");
console.log("After splicing: " + months);
//oh no. we added December instead of May. Let's replace it 
months.splice(4, 0, "December");
console.log("After 2nd splicing: " + months);

//all looks fine for me
months.splice(4, 1, "May");
console.log("After 3nd splicing: " + months);

//nah, i don't really like a winter. Let's move straight to April
months.splice(0, 3);
console.log("After 4nd splicing: " + months);
