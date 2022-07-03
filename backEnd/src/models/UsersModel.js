const connection = require('./connection');

const findOne = async (email, password) => {
  console.log('ssdfsdfsdfsfdfsdf');
  const query = 'SELECT * FROM users WHERE email=? AND password=?';
  const [user] = await connection.execute(query, [email, password]);
  return user;
};

module.exports = {
  findOne,
};
