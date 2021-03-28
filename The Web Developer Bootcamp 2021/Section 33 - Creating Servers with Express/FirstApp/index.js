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
    res.send("Welcome to the Home Page!!");
})

app.get("/r/:subreddit", (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Currently browsing: ${subreddit} subreddit </h1>`);
})

app.get("/r/:subreddit/:postId", (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing Post ID:${postId} on the ${subreddit} subreddit </h1>`);
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

app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found...");
    }
    res.send(`<h1>Search results for: ${q} </h1>`);
})

app.get("*", (req, res) => {
    res.send("Route to this path doesn't exists");
})

app.listen(8080, () => {
    console.log("Listening on port 8080");
})