const Status = require('http-status');
const error = require('../utils/throwError');
const generateJwt = require('../utils/generateJwt');
const UsersModel = require('../models/UsersModel');
const MSG_SERVER_ERROR = require('../utils/variables');

const userIsAuthorized = async (email, password) => {
  const user = await UsersModel.verifyPassword(email, password);
  if (user.length === 0) {
    throw error(Status.UNAUTHORIZED, 'Usuário não cadastrado');
  }
  return user;
};

const userAlreadyRegistered = async (email) => {
  const user = await UsersModel.verifyNewUser(email);
  if (user.length !== 0) {
    throw error(Status.BAD_REQUEST, 'Usuário já cadastrado');
  }
};

const handleTaskListCreation = async (userId) => {
  try {
    await UsersModel.createNewTaskList(userId);
  } catch (e) {
    await UsersModel.deleteUser(userId);
    throw error(Status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
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
  await userAlreadyRegistered(email, name);
  const resultSetHeader = await UsersModel.createNewUser(email, password, name);
  await handleTaskListCreation(resultSetHeader.insertId);
};

module.exports = {
  signIn,
  signUp,
};
