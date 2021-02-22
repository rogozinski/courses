/* Exercise 47 - Map Practice - Solution */
const names = ["Michael", " Carl Johnson", "Dr. Who", " Shimatani Hitomi  "];

function cleanNames(checkArray) {
    const newArray = checkArray.map(function (name) {
        return name.trim();
    });
    return newArray;
}
