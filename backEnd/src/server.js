require('dotenv').config();
const app = require('./api');

const port = process.env.API_PORT || 3001;

app.get('/', (_request, response) => {
  response.send('asdasdsad');
});

app.listen(port);
