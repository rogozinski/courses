const franc = require("franc");
const langs = require("langs");

const langCode = franc("Czesc. Mam na imie Michal");

const language = langs.where("3", langCode);
console.log(language.name);