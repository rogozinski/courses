/* EXAMPLE */
/*
fetch("https://api.cryptonator.com/api/full/btc-usd")
    .then(res => {
        console.log("RESPONSE, WAITING TO PARSE...", res);
        //this return a Promise
        return res.json();

    })
    .then(data => {
        console.log("DATA PARSED...")
        console.log(data.ticker.price)
    })
    .catch(error => {
        console.log("Error", error);
    })
    */

/* SAME EXAMPLE BUT WITH ASYNC FUNCTION */
const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch("https://api.cryptonator.com/api/full/btc-usd");
        const data = await res.json();
        console.log(data.ticker.price)
    }
    catch (error) {
        console.log("SOMETHING WENT WRONG: ", error);
    }
}

fetchBitcoinPrice();