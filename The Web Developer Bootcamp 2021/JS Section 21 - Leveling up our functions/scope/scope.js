//FUNCTION SCOPE
/*
let totalEggs = 0;

function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);
*/

/*
let bird = "Scarlet Macaw";
function birdWatch() {
    let bird = "Great Blue Heron";
    console.log(bird);
}

birdWatch();
*/
/*
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = "Hi!";
}

console.log(radius);
console.log(msg);
*/

// for (let i = 0; i < 5; i++) {
//     var msg = "adsada";
//     console.log(msg);
// }
// console.log(msg);

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}