const express = require("express");
const app = express();

/*
app.use((req, res) => {
    console.log("Received request");
    // res.send("Good evening. This is server of Development Studio Centre.");
    // res.send({ color: "red" });
    res.send("<h1>This is my webpage</h1>");
})
*/
7
app.get("/", (req, res) => {
    res.send("Home Page");
})

app.post("/cats", (req, res) => {
    res.send("POST REQUEST to /cats");
})

app.get("/cats", (req, res) => {
    res.send("MEOW");
})

app.get("/dogs", (req, res) => {
    res.send("WOOF");
})

app.get("*", (req, res) => {
    res.send("Route to this path doesn't exists");
})


app.listen(8080, () => {
    console.log("Listening on port 8080");
})