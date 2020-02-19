const path = require('path');

const serverError = (err, req, res) => {
  res.status(500).sendFile(path.join(__dirname, '..', '..', 'public', '500.html'));
};

const clientError = (req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, '..', '..', 'public', '404.html'));
};

module.exports = {
  serverError,
  clientError,
};
