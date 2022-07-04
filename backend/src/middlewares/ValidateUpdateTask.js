const {
  allUpdateTaskFieldsExist,
  taskIsValid,
} = require('../utils/tasksValidation');

module.exports = async (req, _res, next) => {
  const { task, status, id } = req.body;
  allUpdateTaskFieldsExist(task, status, id);
  taskIsValid(task);
  return next();
};
