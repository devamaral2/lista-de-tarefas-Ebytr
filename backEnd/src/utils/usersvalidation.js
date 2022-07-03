const status = require('http-status');
const error = require('./throwError');

const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
// regex encontrado no endereço: https://pt.stackoverflow.com/questions/373574/regex-para-senha-forte

const emailIsValid = (email) => {
  if (!email.includes('@') || !email.includes('.com')) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'Email inválido',
    );
  }
  if (email.length <= 6) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'O email deve ter mais de seis caracteres',
    );
  }
};

const nameIsValid = (name) => {
  if (name.length <= 3) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'O usuário deve ter mais de três letras',
    );
  }
};

const passwordIsValid = (password) => {
  if (!regex.test(password)) {
    throw error(
      status.UNPROCESSABLE_ENTITY,
      'O password deve ter 8 caracteres com pelo menos uma letra maiuscula, um numero e um caracter especial',
    );
  }
};

const signInAllFieldsExist = (email, password) => {
  if (!email || !password) {
    throw error(
      status.BAD_REQUEST,
      'Todos os campos devem ser preenxidos',
    );
  }
};

const signUpAllFieldsExist = (email, password, name) => {
  if (!email || !password || !name) {
    throw error(
      status.BAD_REQUEST,
      'Todos os campos devem ser preenxidos',
    );
  }
};

module.exports = {
  emailIsValid,
  signInAllFieldsExist,
  signUpAllFieldsExist,
  nameIsValid,
  passwordIsValid,
};
