// async function hello() {
// }

const sing = async () => {
    throw new Error("async failed");
    return "Lalalala";
}

sing()
    .then(data => {
        console.log("Promise Resolved With:", data);
    })
    .catch(err => {
        console.log("Promise Rejected:");
        console.log(err);
    })