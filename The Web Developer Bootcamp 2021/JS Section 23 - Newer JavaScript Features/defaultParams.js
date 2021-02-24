/* SETTING A DEFAULT PARAMETER IF NOT INSERTED BY USER */
//OLD SCHOOL WAY
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    return Math.floor(Math.random() * numSides) + 1;
}

//NEW WAY
function rollDie2(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}