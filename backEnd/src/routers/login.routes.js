const routes = require('express').Router();
const rescue = require('express-rescue');
const UsersControler = require('../controllers/UsersControllers');
const ValidateLogin = require('../middlewares/ValidateLogin');

routes.post('/', rescue(ValidateLogin), UsersControler.signIn);

module.exports = routes;
