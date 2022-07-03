const Status = require('http-status');
const TasksModel = require('../models/TaskesModel');
const error = require('../utils/throwError');
const MSG_SERVER_ERROR = require('../utils/variables');

const actualDate = new Date();

const handleGetAll = async (id) => {
  try {
    const taskList = await TasksModel.getAll(id);
    return taskList;
  } catch (e) {
    throw error(Status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
};

const getAll = async (id) => {
  const taskList = await handleGetAll(id);
  return taskList;
};

const create = async (payLoad, id) => {
  const { task, status } = payLoad;
  console.log(actualDate);
  const res = await TasksModel.create(task, status, actualDate, id);
  console.log(res);
};

module.exports = {
  getAll,
  create,
};
