/* Exercise 47 - Map Practice - Solution */
const names = ["Michael", " Carl Johnson", "Dr. Who", " Shimatani Hitomi  "];

function cleanNames(checkArray) {
    const newArray = checkArray.map(function (name) {
        return name.trim();
    });
    return newArray;
}

/* Exercise 48 - Arrow Function - Solution */
const greet = (userName) => {
    return `Hey ${userName}!`;
}

/* Exercise 49 - Filter Exercise - Solution */
const username = ["john", "googleforlife777", "qq41241353231235dqq", "0_____0", "mad Max", "lilyeris"];
const validUserNames = usrArray => usrArray.filter(names => names.length < 10);

/* Exercise 50 - Some/Every Exercise - Solution */
const evenNumbers = [2, 4, 6, 8];
const oddNumbers = [1, 3, 4, 5];
const mixNumbers = [1, 2, 3, 4];

const allEvens = insArray => insArray.every(number => number % 2 === 0);
