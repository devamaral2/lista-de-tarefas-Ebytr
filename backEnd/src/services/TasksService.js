const Status = require('http-status');
const TasksModel = require('../models/TaskesModel');
const error = require('../utils/throwError');
const MSG_SERVER_ERROR = require('../utils/variables');

const actualDate = new Date();

const handleGetAll = async (userId) => {
  try {
    const taskList = await TasksModel.getAll(userId);
    return taskList;
  } catch (e) {
    throw error(Status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
};

const handleCreation = async (task, status, userId) => {
  try {
    await TasksModel.create(task, status, actualDate, userId);
  } catch (e) {
    throw error(Status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
};

const handleUpdate = async (id, task, status, userId) => {
  try {
    const resultSetHeader = await TasksModel.update(id, task, status, actualDate, userId);
    if (resultSetHeader.changedRows === 0) {
      throw error(Status.UNPROCESSABLE_ENTITY, 'não existe uma task com este id para ser editada');
    }
  } catch (e) {
    throw error(Status.INTERNAL_SERVER_ERROR, MSG_SERVER_ERROR);
  }
};

const getAll = async (userId) => {
  const taskList = await handleGetAll(userId);
  return taskList;
};

const create = async (payLoad, userId) => {
  const { task, status } = payLoad;
  await handleCreation(task, status, userId);
};

const update = async (payLoad, userId) => {
  console.log('asdasdasfafaw');
  const { task, status, id } = payLoad;
  await handleUpdate(id, task, status, userId);
};

module.exports = {
  getAll,
  create,
  update,
};
