// ===================================
// NESTED FOR LOOP EXAMPLE 1
// ===================================
/*for (let i = 1; i <= 10; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`     j is: ${j}`)
    }
}

// ===================================
// NESTED FOR LOOP EXAMPLE 2
// ===================================
let str = "LOL";

for (let i = 0; i <= 4; i++) {
    console.log("Outer: ", i);
    for (let j = 0; j < str.length; j++) {
        console.log("   Inner: ", str[j]);
    }
}
*/

// ===================================
// NESTED ARRAY ITERATION
// ===================================


const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    console.warn("Row no.", i + 1)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}