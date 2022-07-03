const connection = require('./connection');

const getAll = async (id) => {
  const query = `SELECT * FROM task_list_${id}`;
  const [taskList] = await connection.execute(query);
  return taskList;
};

const create = async (task, status, actualDate, id) => {
  const query = `INSERT INTO task_list_${id}(task, status, date) VALUES (?, ?, ?)`;
  const [taskList] = await connection.execute(query, [task, status, actualDate]);
  return taskList;
};

module.exports = {
  getAll,
  create,
};
