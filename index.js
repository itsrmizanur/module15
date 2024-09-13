const express = require('express');
const app = express();
const port = 5500;


app.get('/', (req, res) => {
    res.end("This is the Home Page");
})
app.get('/about', (req, res) => {
    res.end("This is the About Page");
})
app.get("/contact", (req, res) => {
    res.end("This is the Contact Page");
});


app.listen(port, () => {
    console.log(`listening on port ${port}`);
})