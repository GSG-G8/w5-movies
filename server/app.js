const express = require('express');
const route = require('./route');
const path =  require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(route);

module.exports = app;





// const port = process.env.PORT || 3000;
// app.listen(3000, () => {
//   console.log(`http://localhost:${port}`);
// });
