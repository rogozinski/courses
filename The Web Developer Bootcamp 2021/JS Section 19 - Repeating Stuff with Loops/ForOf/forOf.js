//EXAMPLE 2

//const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners'];

//write down reddit categories attached to the link with for loop
/*
for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visite reddit.com/r/${subreddits[i]}`);
}
*/
//and now do the same but by using for of loop
/*
for (let sub of subreddits) {
    console.log(`Visite reddit.com/r/${sub}`);
}
*/
/*
//EXAMPLE 2
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]
//write down name of all student from all rows
for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}

//and now do the same but by using for of loop
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}
*/

//EXAMPLE 3
//iteration of string
/*
for (let char of "hello world") {
    console.log(char);
}
*/
//PRACTICE EXERCISE
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let nums of numbers) {
    console.log(nums * nums);
    //console.log(Math.pow(nums, 2)); //or you can use this solution
}