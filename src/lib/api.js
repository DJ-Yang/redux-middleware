import axios from 'axios';
// api의 함수화

export const getPost = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
