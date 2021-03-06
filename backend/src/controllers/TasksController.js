const Status = require('http-status');
const TasksService = require('../services/TasksService');

const getAll = async (req, res) => {
  const { id } = req.params;
  const taskList = await TasksService.getAll(id);
  return res.status(Status.OK).json({ taskList });
};

const create = async (req, res) => {
  const payLoad = req.body;
  const { id } = req.params;
  await TasksService.create(payLoad, id);
  return res.status(Status.CREATED).json({ message: 'Mensagem Criada com sucesso.' });
};

const update = async (req, res) => {
  const payLoad = req.body;
  const { id } = req.params;
  await TasksService.update(payLoad, id);
  return res.status(Status.NO_CONTENT).end();
};

const destroy = async (req, res) => {
  const { id } = req.params;
  const { taskid } = req.headers;
  await TasksService.destroy(id, taskid);
  return res.status(Status.NO_CONTENT).end();
};

module.exports = {
  getAll,
  create,
  update,
  destroy,
};
