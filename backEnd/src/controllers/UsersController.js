const UserService = require('../services/UsersService');

const signIn = async (req, res) => {
  const payLoad = req.body;
  const token = await UserService.signIn(payLoad);
  return res.status(200).json({ token });
};

const signUp = async (req, res) => {
  // const payLoad = req.body;
  // const token = await UserService.signIn(payLoad);
  const token = 'teste';
  return res.status(200).json({ token });
};

module.exports = {
  signIn,
  signUp,
};
