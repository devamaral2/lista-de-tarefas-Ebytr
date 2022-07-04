export const ENDPOINTS = 'http://localhost:3001/login';
const axios = require('axios').default;

export const fetchData = async () => {
  const response = axios({
    method: 'post',
    url: ENDPOINTS,
    data: {
      email: 'magno@email.com',
      password: 'magnotaskS#10',
    },
  }).then((res) => {
    res.json();
  }).catch((error) => {
    console.log(error);
  });
  // const response = await fetch(ENDPOINTS);
  // const data = await response.json();
  return response;
};
