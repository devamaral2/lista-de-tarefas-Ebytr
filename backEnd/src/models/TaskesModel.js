const connection = require('./connection');

const getAll = async (id) => {
  const query = `SELECT * FROM task_list_${id}`;
  const [teskList] = await connection.execute(query);
  return teskList;
};

module.exports = {
  getAll,
};
