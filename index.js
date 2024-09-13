const express = require('express');
const app = express();
const port = 5500;





app.listen(port, () => {
    console.log(`listening on port ${port}`);
})