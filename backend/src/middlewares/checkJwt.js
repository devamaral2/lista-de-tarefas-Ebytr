const jwt = require('jsonwebtoken');
const Status = require('http-status');
require('dotenv').config();
const error = require('../utils/throwError');
const UsersModel = require('../models/UsersModel');
const { MSG_SERVER_ERROR } = require('../utils/consts');

const secret = process.env.JWT_SECRET;
const handleErrors = (e) => {
  if (e.message.includes('Unknown database')) {
    throw error(Status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
  throw error(Status.UNAUTHORIZED, 'Token vencido ou inválido.');
};

const deconding = async (token, id) => {
  try {
    const decoded = jwt.verify(token, secret);
    const userId = decoded.data.id;
    const user = await UsersModel.getById(userId);
    if (user.length === 0 || Number(id) !== userId) {
      throw error(Status.UNAUTHORIZED, 'Token inválido.');
    }
  } catch (e) {
    handleErrors(e);
  }
};

module.exports = async (req, _res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  if (!token) throw error(Status.UNAUTHORIZED, 'O token não foi encontrado.');
  await deconding(token, id);
  return next();
};
