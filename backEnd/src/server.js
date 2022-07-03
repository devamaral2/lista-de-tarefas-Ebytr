const app = require('./api');

const port = process.env.SERVER_PORT;

app.get('/', (_request, response) => {
  response.send('asdasdsad');
});

app.listen(port);
