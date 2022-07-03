const status = require('http-status');
const error = require('../utils/throwError');
const generateJwt = require('../utils/generateJwt');
const UsersModel = require('../models/UsersModel');

const userIsAuthorized = async (email, password) => {
  const user = await UsersModel.verifyPassword(email, password);
  if (user.length === 0) {
    throw error(status.UNAUTHORIZED, 'Usuário não cadastrado');
  }
  return user;
};

const userAlreadyregistered = async (email) => {
  const user = await UsersModel.verifyNewUser(email);
  if (user.length !== 0) {
    throw error(status.BAD_REQUEST, 'Usuário já cadastrado');
  }
};

const signIn = async (payload) => {
  const { email, password } = payload;
  const [user] = await userIsAuthorized(email, password);
  const token = generateJwt(user);
  return token;
};

const signUp = async (payload) => {
  const { email, password, name } = payload;
  await userAlreadyregistered(email, name);
  const resultSetHeader = await UsersModel.createNewUser(email, password, name);
  const result = await UsersModel.createNewTaskList(resultSetHeader.insertId);
  console.log(result);
  return 'token';
};

module.exports = {
  signIn,
  signUp,
};
