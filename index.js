const express = require('express');
const app     = express();
const http    = require('http').Server(app);

const PORT    = 3000;

// Serve static content
app.use(express.static('public/html'));
app.use(express.static('public/css'));
app.use(express.static('public/semantic/**'));

app.listen(PORT, () => {
    console.log(`~~~ Server started on port ${PORT} ~~~`)
});