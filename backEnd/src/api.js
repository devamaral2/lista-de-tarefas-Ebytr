const express = require('express');
const Routes = require('./routers');
const ErrorMiddleware = require('./middlewares/ErrorMiddleware');

const app = express();

app.use(express.json());

app.use('/login', Routes.loginRoutes);
// app.use('/tasks', Routes.tasksRoutes);
app.use(ErrorMiddleware);

module.exports = app;
