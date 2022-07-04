const Status = require('http-status');
const UserService = require('../services/UsersService');

const signIn = async (req, res) => {
  const payLoad = req.body;
  const token = await UserService.signIn(payLoad);
  return res.status(Status.OK).json({ token });
};

const signUp = async (req, res) => {
  const payLoad = req.body;
  await UserService.signUp(payLoad);
  return res.status(Status.CREATED).json({ message: 'O usuário foi criado.' });
};

module.exports = {
  signIn,
  signUp,
};
