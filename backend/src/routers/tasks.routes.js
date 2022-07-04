const routes = require('express').Router();
const rescue = require('express-rescue');
const checkJwt = require('../middlewares/checkJwt');
const TasksController = require('../controllers/TasksController');
const ValidateNewTask = require('../middlewares/ValidateNewTask');
const ValidateUpdateTask = require('../middlewares/ValidateUpdateTask');

routes.get('/:id', rescue(checkJwt), rescue(TasksController.getAll));
routes.post(
  '/:id',
  rescue(checkJwt),
  rescue(ValidateNewTask),
  rescue(TasksController.create),
);
routes.put(
  '/:id',
  rescue(checkJwt),
  rescue(ValidateUpdateTask),
  rescue(TasksController.update),
);
routes.delete(
  '/:id',
  rescue(checkJwt),
  rescue(TasksController.destroy),
);

module.exports = routes;
