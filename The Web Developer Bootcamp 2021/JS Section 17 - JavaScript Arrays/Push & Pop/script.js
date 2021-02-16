//push and pop  methods practice

console.warn("TODAY NEW ROCKY MOVIE IS COMING OUT! Let's see how many people are waiting outside!")
//current queue to the movie
let movieLine = ["Tom", "Nancy"];
console.log(movieLine.length + " people in the line: " + movieLine);

//new person arrived so we have to place it at the end of the line
movieLine.push("Oliver");
console.log(movieLine.length + " people in the line: " + movieLine);

//there's a couple that just arrived as well
movieLine.push("John", "Amy");
console.log(movieLine.length + " people in the line: " + movieLine);

//seems like Amy forgot something and she left a line
movieLine.pop();
console.log(movieLine.length + " people in the line: " + movieLine);