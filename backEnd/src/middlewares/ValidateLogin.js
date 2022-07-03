const status = require('http-status');
const error = require('../utils/throwError');
const UsersModel = require('../models/UsersModel');
const generateJwt = require('../utils/generateJwt');

const emailIsValid = (email) => {
  if (!email.includes('@') || !email.includes('.com')) {
    throw error(status.UNPROCESSABLE_ENTITY, 'Email inválido');
  }
};

const allFildsExist = (email, password) => {
  if (!email || !password) {
    throw error(status.BAD_REQUEST, 'Todos os campos devem ser preenxidos');
  }
};

const userIsAuthorized = async (email, password) => {
  const user = await UsersModel.findOne(email, password);
  if (user.length === 0) {
    throw error(status.UNAUTHORIZED, 'Usuário não cadastrado');
  }
};

module.exports = async (req, _res, next) => {
  const { email, password } = req.body;
  allFildsExist(email, password);
  emailIsValid(email);
  await userIsAuthorized(email, password);
  // req.headers.token = generateJwt(user);
  return next();
};
