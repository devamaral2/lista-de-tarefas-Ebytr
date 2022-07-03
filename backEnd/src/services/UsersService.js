const status = require('http-status');
const error = require('../utils/throwError');
const generateJwt = require('../utils/generateJwt');
const UsersModel = require('../models/UsersModel');

const userIsAuthorized = async (email, password) => {
  const user = await UsersModel.findOne(email, password);
  if (user.length === 0) {
    throw error(status.UNAUTHORIZED, 'Usuário não cadastrado');
  }
  return user;
};

const signIn = async (payload) => {
  const { email, password } = payload;
  const [user] = await userIsAuthorized(email, password);
  const token = generateJwt(user);
  return token;
};

module.exports = {
  signIn,
};
