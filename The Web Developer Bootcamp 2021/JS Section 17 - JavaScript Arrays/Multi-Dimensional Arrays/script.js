const gameBoard = [["X", "O", "X"], ["O", "null", "X"], ["O", "O", "X"]];
console.log(gameBoard);

//Nested Arrays Exercise - Seats at the plane
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

//I've placed Hugo in the 4th row middle seat
airplaneSeats[3][1] = "Hugo";
console.log(airplaneSeats);