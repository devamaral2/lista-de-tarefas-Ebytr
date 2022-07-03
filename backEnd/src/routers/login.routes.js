const routes = require('express').Router();
const rescue = require('express-rescue');
const UsersControler = require('../controllers/UsersController');
const ValidateSignIn = require('../middlewares/ValidateSignIn');
const ValidateSignUp = require('../middlewares/ValidateSignUp');

routes.post('/', rescue(ValidateSignIn), UsersControler.signIn);
routes.post('/create', rescue(ValidateSignUp), UsersControler.signUp);

module.exports = routes;
