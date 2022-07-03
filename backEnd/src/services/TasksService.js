const status = require('http-status');
const TasksModel = require('../models/TaskesModel');
const error = require('../utils/throwError');
const MSG_SERVER_ERROR = require('../utils/variables');

const handleGetAll = async (id) => {
  try {
    const taskList = await TasksModel.getAll(id);
    return taskList;
  } catch (e) {
    throw error(status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
};

const getAll = async (id) => {
  const taskList = await handleGetAll(id);
  return taskList;
};

module.exports = {
  getAll,
};
