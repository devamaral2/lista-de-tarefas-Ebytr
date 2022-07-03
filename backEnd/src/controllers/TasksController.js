const status = require('http-status');
const TasksService = require('../services/TasksService');

const getAll = async (req, res) => {
  const { id } = req.params;
  const taskList = await TasksService.getAll(id);
  return res.status(status.OK).json({ taskList });
};

module.exports = {
  getAll,
};
