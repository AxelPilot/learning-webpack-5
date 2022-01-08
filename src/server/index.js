// Retrieve API key from .env file.
const dotenv = require('dotenv');
dotenv.config();
const apiKeys = {
    API_KEY: process.env.API_KEY
}

const path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');

const app = express();

app.use(express.static('dist'));

console.log(__dirname);

// Initialize API key route with a callback function.
app.get('/apiKeys', (req, res) => {
    res.send(apiKeys);
});

app.get('/', (req, res) => {
    res.sendFile('/dist/index.html', { root: __dirname + '/../..' });
});

// designates what port the app will listen to for incoming requests
app.listen(8081, () => {
    console.log('Example app listening on port 8081!');
});

app.get('/test', (req, res) => {
    res.send(mockAPIResponse);
});
