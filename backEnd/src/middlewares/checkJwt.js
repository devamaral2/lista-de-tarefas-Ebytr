const jwt = require('jsonwebtoken');
const status = require('http-status');
require('dotenv').config();
const error = require('../utils/throwError');
const UsersModel = require('../models/UsersModel');
const MSG_SERVER_ERROR = require('../utils/variables');

const secret = process.env.JWT_SECRET;

const deconding = async (token) => {
  const decoded = jwt.verify(token, secret);
  const user = await UsersModel.getById(decoded.data.id);
  if (user.length === 0) {
    throw error(status.UNAUTHORIZED, 'Token inválido.');
  }
};

const handleErrors = (e) => {
  if (e.message.includes('Unknown database')) {
    throw error(status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
  throw error(status.UNAUTHORIZED, 'Token vencido.');
}

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw error(status.UNAUTHORIZED, 'O token não foi encontrado.');
  try {
    await deconding(token);
    return next();
  } catch (e) {
    handleErrors(e);
  }
};
