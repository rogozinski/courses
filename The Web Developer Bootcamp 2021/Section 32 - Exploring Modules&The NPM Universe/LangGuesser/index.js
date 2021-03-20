const franc = require("franc");
const langs = require("langs");
const color = require("colors");

const userInput = process.argv[2];
const langCode = franc(userInput);

if (langCode === "und") {
    console.log("Sorry, it is something wrong with inserted text..".red)
} else {

    const language = langs.where("3", langCode);
    console.log(`The language of inserted text: ${language.name}`.green);
}