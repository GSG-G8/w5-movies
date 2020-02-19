const express = require('express');
//const route = require('./route');
const path =  require('path');
const fetch = require('node-fetch');
require('dotenv').config();


const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.post('/search' , (req , res) => {
  const movieName = req.body.name;
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.MY_KEY}&query=${movieName}`)
  .then(result => result.json())
  .then(result => res.json(result))
  .catch(console.error);
})

app.get('/movies' , (req , res) => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MY_KEY}&language=en-US&page=1
  `)
  .then(result => result.json())
  .then(result => res.json(result))
  .catch(console.error);
})

// app.use(route);

module.exports = app;