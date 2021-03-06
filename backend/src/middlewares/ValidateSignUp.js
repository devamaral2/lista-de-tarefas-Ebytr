const {
  allSignUpFieldsExist,
  emailIsValid,
  passwordIsValid,
  nameIsValid,
} = require('../utils/usersvalidation');

module.exports = async (req, _res, next) => {
  const { email, password, name } = req.body;
  allSignUpFieldsExist(email, password, name);
  emailIsValid(email);
  passwordIsValid(password);
  nameIsValid(name);
  return next();
};
