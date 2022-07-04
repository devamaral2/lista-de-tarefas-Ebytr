const connection = require('./connection');

const getAll = async (userId) => {
  const query = `SELECT * FROM task_list_${userId}`;
  const [taskList] = await connection.execute(query);
  return taskList;
};

const create = async (task, status, actualDate, userId) => {
  const query = `INSERT INTO task_list_${userId}(task, status, date) VALUES (?, ?, ?)`;
  const [resultSetHeader] = await connection.execute(query, [task, status, actualDate]);
  return resultSetHeader;
};

const update = async (id, task, status, actualDate, userId) => {
  const query = `
    UPDATE task_list_${userId} SET
    task=?,
    status=?,
    date=?
    WHERE id=?
  `;
  const [resultSetHeader] = await connection.execute(query, [task, status, actualDate, id]);
  return resultSetHeader;
};

const destroy = async (userId, id) => {
  const query = `DELETE FROM task_list_${userId} WHERE id=?`;
  const [resultSetHeader] = await connection.execute(query, [id]);
  return resultSetHeader;
};

module.exports = {
  getAll,
  create,
  update,
  destroy,
};
