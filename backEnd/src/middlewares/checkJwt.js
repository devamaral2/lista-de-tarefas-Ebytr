const jwt = require('jsonwebtoken');
const status = require('http-status');
require('dotenv').config();
const error = require('../utils/throwError');
const UsersModel = require('../models/UsersModel');
const MSG_SERVER_ERROR = require('../utils/variables');

const secret = process.env.JWT_SECRET;
const handleErrors = (e) => {
  if (e.message.includes('Unknown database')) {
    throw error(status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
  throw error(status.UNAUTHORIZED, 'Token vencido ou inválido.');
};

const deconding = async (token, id) => {
  try {
    const decoded = jwt.verify(token, secret);
    const userId = decoded.data.id;
    const user = await UsersModel.getById(userId);
    console.log(id);
    if (user.length === 0 || Number(id) !== userId) {
      throw error(status.UNAUTHORIZED, 'Token inválido.');
    }
  } catch (e) {
    handleErrors(e);
  }
};

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  if (!token) throw error(status.UNAUTHORIZED, 'O token não foi encontrado.');
  await deconding(token, id);
  return next();
};
