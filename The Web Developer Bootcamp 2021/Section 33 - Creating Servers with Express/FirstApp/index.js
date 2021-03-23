const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("Received request");
    res.send("Good evening. This is server of Development Studio Centre.");
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})