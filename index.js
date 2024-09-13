const express = require("express");
const fs = require("fs");
const app = express();
const port = 5500;

app.get("/", (req, res) => {
    res.end("This is the Home Page");
});
app.get("/about", (req, res) => {
    res.end("This is the About Page");
});
app.get("/contact", (req, res) => {
    res.end("This is the Contact Page");
});
app.get("/file-write", (req, res) => {
    let msg = "demo.txt is cereated and hello world is written there";
    fs.writeFileSync("./demo.txt", "hello world");
    res.end(msg);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
