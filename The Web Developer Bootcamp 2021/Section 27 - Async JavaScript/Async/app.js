/* SYNTAX */
// async function hello() {
// }

/* EXAMPLE 1 */

// const sing = async () => {
//     throw new Error("async failed");
//     return "Lalalala";
// }

// sing()
//     .then(data => {
//         console.log("Promise Resolved With:", data);
//     })
//     .catch(err => {
//         console.log("Promise Rejected:");
//         console.log(err);
//     })
/* EXAMPLE 2 */
// const login = async (username, password) => {
//     if (!username || !password) throw "Missing Credentials"
//     if (password === "abc123") return "Welcome!"
//     throw "Invalid Password"
// }

// login("user", "abc123")
//     .then(msg => {
//         console.log("Logged in")
//         console.log(msg)
//     })
//     .catch(err => {
//         console.log("Error!")
//         console.log(err)
//     })

/* EXAMPLE 3 */
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// delayedColorChange('red', 1000)
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('indigo', 1000))
//     .then(() => delayedColorChange('violet', 1000))

async function rainbow() {
    await delayedColorChange("red", 1000)
    await delayedColorChange("orange", 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "All Done!"
}

async function printRainbow() {
    await rainbow();
    console.log("End of Rainbow");
}

printRainbow();