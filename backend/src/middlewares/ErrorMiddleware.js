// eslint-disable-next-line no-unused-vars
const Status = require('http-status');

// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) => {
  if (err) return res.status(err.status).json({ message: err.message });
  return res.status(Status.INTERNAL_SERVER_ERROR).json({ message: 'problema de conexão com o banco de dados.' });
};
