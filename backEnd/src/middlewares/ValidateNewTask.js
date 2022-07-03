const {
  allTaskFieldsExist,
  taskIsValid,
} = require('../utils/tasksValidation');

module.exports = async (req, _res, next) => {
  const { task, status } = req.body;
  allTaskFieldsExist(task, status);
  taskIsValid(task);
  return next();
};
