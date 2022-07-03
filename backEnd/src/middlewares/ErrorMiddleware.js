// eslint-disable-next-line no-unused-vars
const status = require('http-status');

// eslint-disable-next-line no-unused-vars
module.exports = (err, _req, res, _next) => {
  if (err) return res.status(err.status).json({ message: err.message });
  return res.status(status.INTERNAL_SERVER_ERROR).json({ message: 'problema de conexão com o banco de dados' });
};
