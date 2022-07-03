const {
  allSignInFieldsExist,
  emailIsValid,
} = require('../utils/usersvalidation');

module.exports = async (req, _res, next) => {
  const { email, password } = req.body;
  allSignInFieldsExist(email, password);
  emailIsValid(email);
  return next();
};
