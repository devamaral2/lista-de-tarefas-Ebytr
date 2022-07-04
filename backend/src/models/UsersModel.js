const connection = require('./connection');

const verifyPassword = async (email, password) => {
  const query = 'SELECT id FROM users WHERE email=? AND password=?';
  const [user] = await connection.execute(query, [email, password]);
  return user;
};

const verifyNewUser = async (email) => {
  const query = 'SELECT id, name, email FROM users WHERE email=?';
  const [user] = await connection.execute(query, [email]);
  return user;
};

const getById = async (userId) => {
  const query = 'SELECT id, name, email FROM users WHERE id=?';
  const [user] = await connection.execute(query, [userId]);
  return user;
};

const createNewUser = async (email, password, name) => {
  const query = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
  const [result] = await connection.execute(query, [email, password, name]);
  return result;
};

const createNewTaskList = async (userId) => {
  const query = `CREATE TABLE IF NOT EXISTS task_list_${userId} (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    task VARCHAR(255) NOT NULL,
    status VARCHAR(20) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP
  );`;
  const [result] = await connection.execute(query);
  return result;
};

const deleteUser = async (userId) => {
  const query = 'DELETE FROM users WHERE id=?';
  await connection.execute(query, [userId]);
};

module.exports = {
  verifyPassword,
  createNewUser,
  verifyNewUser,
  createNewTaskList,
  deleteUser,
  getById,
};
