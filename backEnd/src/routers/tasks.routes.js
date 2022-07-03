const routes = require('express').Router();
const rescue = require('express-rescue');
const checkJwt = require('../middlewares/checkJwt');
const TasksController = require('../controllers/TasksController');

routes.get('/:id', rescue(checkJwt), TasksController.getAll);

module.exports = routes;
