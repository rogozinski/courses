const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("Received request");
    // res.send("Good evening. This is server of Development Studio Centre.");
    // res.send({ color: "red" });
    res.send("<h1>This is my webpage</h1>");

})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})