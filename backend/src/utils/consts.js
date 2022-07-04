const MSG_SERVER_ERROR = 'existe um problema de conexão com o servidor.';
const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PASSWORD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
// regex encontrado no endereço: https://pt.stackoverflow.com/questions/373574/regex-para-senha-forte

module.exports = {
  MSG_SERVER_ERROR,
  EMAIL_REGEX,
  PASSWORD_REGEX,
};
