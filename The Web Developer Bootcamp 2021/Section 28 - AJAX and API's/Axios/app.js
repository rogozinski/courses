/* EXAMPLE 1 */
// axios.get("https://api.cryptonator.com/api/full/btc-usd")
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Something went wrong: ", err);
//     })

/*EXAMPLE 2 */
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd")
        console.log(res.data.ticker.price)
    } catch (err) {
        console.log("Something went wrong: ", err);
    }
}

//fetchBitcoinPrice();

/*EXAMPLE 3 - DADs JOKES */
const jokes = document.querySelector("#jokes");
const button = document.querySelector("#newJoke");

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI)
}


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :("
    }

}

button.addEventListener('click', addNewJoke)