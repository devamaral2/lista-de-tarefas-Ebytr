const status = require('http-status');

const getAll = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  // const product = await Product.getById(id);
  return res.status(status.OK).json({ id });
};

module.exports = {
  getAll,
};
