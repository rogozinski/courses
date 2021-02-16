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



//shift and unshift method practice

console.warn("CINEMA IS OPEN! Let's see how many people went in")
//current queue in front of cinema
console.log(movieLine.length + " people are still waiting to go in: " + movieLine);

//first person went it
movieLine.shift();
console.log(movieLine.length + " people are still waiting to go in: " + movieLine);

//another person went it
movieLine.shift();
console.log(movieLine.length + " people are still waiting to go in: " + movieLine);

//another person went it
movieLine.shift();
console.log(movieLine.length + " people are still waiting to go in: " + movieLine);

//another person went it
movieLine.shift();
console.log(movieLine.length + " people are still waiting to go in: " + movieLine);

//Amy just arrived. But she has tickets
movieLine.push("Amy");
console.log(movieLine.length + " people in the line: " + movieLine);

//Security helped John to leave the cinema because he hasn't got ticket on him
movieLine.unshift("John");
console.log(movieLine.length + " people are still waiting to go in: " + movieLine);

//still better love story than The Twilight...



