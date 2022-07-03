const {
  signInAllFieldsExist,
  emailIsValid,
} = require('../utils/usersvalidation');

module.exports = async (req, _res, next) => {
  const { email, password } = req.body;
  signInAllFieldsExist(email, password);
  emailIsValid(email);
  return next();
};
