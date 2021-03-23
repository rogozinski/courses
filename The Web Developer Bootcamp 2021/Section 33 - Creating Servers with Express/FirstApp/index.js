const express = require("express");
const app = express();

app.use(() => {
    console.log("Received request");
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})