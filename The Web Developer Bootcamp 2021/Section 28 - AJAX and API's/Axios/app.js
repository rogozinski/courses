/* EXAMPLE 1 */
// axios.get("https://api.cryptonator.com/api/full/btc-usd")
//     .then(res => {
//         console.log(res.data.ticker.price)
//     })
//     .catch(err => {
//         console.log("Something went wrong: ", err);
//     })

/* EXAMPLE 2 */
const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get("https://api.cryptonator.com/api/full/btc-usd")
        console.log(res.data.ticker.price)
    } catch (err) {
        console.log("Something went wrong: ", err);
    }
}

fetchBitcoinPrice();