const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const handleError = require('./controller/error');
require('dotenv').config();


const app = express();

app.disable('x-powered-by');
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/search', (req, res) => {
  const movieName = req.body.name;
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MY_KEY}&query=${movieName}`)
    .then((result) => result.json())
    .then((result) => res.json(result))
    .catch(console.error);
});

app.get('/movies', (req, res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MY_KEY}&language=en-US&page=1
  `)
    .then((result) => result.json())
    .then((result) => res.json(result))
    .catch(console.error);
});

app.use(handleError.clientError);

app.use(handleError.serverError);

module.exports = app;
