// const LoginServices = require('../services/loginServices');

const signIn = async (req, res) => {
  // const token = req.headers.token
  // console.log(token)
  // const payLoad = req.body;
  // const token = await LoginServices.signIn(payLoad);
  return res.status(200).json({ token: 'token' });
};

module.exports = {
  signIn,
};
