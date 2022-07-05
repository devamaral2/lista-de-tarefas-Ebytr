const LOGIN = 'http://localhost:3001/login';
const axios = require('axios').default;

export const getTasksList = async (id, token) => {
  const response = await axios.get(`http://localhost:3001/tasks/${id}`, {
    headers: {
      authorization: token,
    },
  });
  // console.log(response);
  return response;
};

export const login = async (email, password) => {
  const response = await axios.post(LOGIN, {
    email,
    password,
  });
  return response;
};
