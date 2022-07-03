const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtConfig = {
  expiresIn: '10s',
  algorithm: 'HS256',
};
const secret = process.env.JWT_SECRET;

const generateJwt = (payload) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);
  return token;
};

module.exports = generateJwt;
