const Status = require('http-status');
const error = require('./throwError');

const allTaskFieldsExist = (task, status) => {
  if (!status || !task) {
    throw error(
      Status.BAD_REQUEST,
      'Todos os campos devem ser preenxidos',
    );
  }
};

const allUpdateTaskFieldsExist = (task, status, id) => {
  if (!status || !task || !id) {
    throw error(
      Status.BAD_REQUEST,
      'Todos os campos devem ser preenxidos',
    );
  }
};

const taskIsValid = (task) => {
  if (task.length <= 3) {
    throw error(
      Status.UNPROCESSABLE_ENTITY,
      'A task deve ter três ou mais caracteres',
    );
  }
};

module.exports = {
  allTaskFieldsExist,
  taskIsValid,
  allUpdateTaskFieldsExist,
};
