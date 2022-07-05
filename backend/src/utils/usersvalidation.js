const status = require('http-status');
const error = require('./throwError');
const { PASSWORD_REGEX, EMAIL_REGEX } = require('./consts');

const emailIsValid = (email) => {
  if (!EMAIL_REGEX.test(email)) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'Email inválido.',
    );
  }
};

const nameIsValid = (name) => {
  if (name.length <= 3) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'O usuário deve ter três ou mais caracteres.',
    );
  }
};

const passwordIsValid = (password) => {
  if (!PASSWORD_REGEX.test(password)) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'O password deve ter 8 caracteres com pelo menos uma letra maiuscula, um numero e um caracter especial($*&@#).',
    );
  }
};

const allSignInFieldsExist = (email, password) => {
  if (!email || !password) {
    throw error(
      status.BAD_REQUEST,
      'Todos os campos devem ser preenxidos.',
    );
  }
};

const allSignUpFieldsExist = (email, password, name) => {
  if (!email || !password || !name) {
    throw error(
      status.BAD_REQUEST,
      'Todos os campos devem ser preenxidos.',
    );
  }
};

module.exports = {
  emailIsValid,
  allSignInFieldsExist,
  allSignUpFieldsExist,
  nameIsValid,
  passwordIsValid,
};
