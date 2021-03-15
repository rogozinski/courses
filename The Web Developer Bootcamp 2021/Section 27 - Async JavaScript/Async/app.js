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