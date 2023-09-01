// Move to env
const BASE_URL = 'https://jsonplaceholder.typicode.com/todos/1';

export const getTest = async () => {
  const res = await fetch(BASE_URL, {
    method: 'GET'
  })
  return res.json();
};
