/* DESTRUCTURING ARRAYS */
//EXAMPLE 1

const scores = [989321, 879098, 823844, 543901, 500230, 359989, 190938];

/* we want to store two highest scores in the variables like this  */
const highScore = scores[0];
const secondHighScore = scores[1];

/* and there's newer, quicker version to do that  */
const [gold, silver, bronze, ...everyoneElse] = scores;