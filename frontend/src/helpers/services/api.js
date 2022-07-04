export const ENDPOINTS = 'http://localhost:3001/tasks/1';
const axios = require('axios').default;

export const fetchData = async () => {
  const response = await axios.get(ENDPOINTS, {
    headers: {
      authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxfSwiaWF0IjoxNjU2ODczNTI0LCJleHAiOjE2NTc0NzgzMjR9.lejaKHon6ZV2V9ZZtjiu10LyGhQkxyKflUpPYzqGllA',
    },
  });
  const data = await response.json();
  return data;
};
