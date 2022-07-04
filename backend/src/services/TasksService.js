const Status = require('http-status');
const TasksModel = require('../models/TaskesModel');
const error = require('../utils/throwError');

const actualDate = new Date();

const handleUpdate = async (id, task, status, userId) => {
  const resultSetHeader = await TasksModel.update(id, task, status, actualDate, userId);
  if (resultSetHeader.changedRows === 0) {
    throw error(Status.UNPROCESSABLE_ENTITY, 'não existe uma task com este id para ser editada');
  }
};

const getAll = async (userId) => {
  const taskList = await TasksModel.getAll(userId);
  return taskList;
};

const create = async (payLoad, userId) => {
  const { task, status } = payLoad;
  await TasksModel.create(task, status, actualDate, userId);
};

const update = async (payLoad, userId) => {
  const { task, status, id } = payLoad;
  await handleUpdate(id, task, status, userId);
};

const destroy = async (userId, id) => {
  const resultSetHeader = await TasksModel.destroy(userId, id);
  if (resultSetHeader.affectedRows === 0) throw error(404, 'Task não encontrada.');
  return resultSetHeader;
};

module.exports = {
  getAll,
  create,
  update,
  destroy,
};
