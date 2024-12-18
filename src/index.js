import './style.css';
import { showUser } from './utilities/showUser';

const usersWrapper = document.querySelector('.users-wrapper');

Promise.all([
  fetch('https://jsonplaceholder.typicode.com/users'),
  fetch('https://jsonplaceholder.typicode.com/todos'),
])
  .then(function ([userResponse, todosResponse]) {
    if (!userResponse.ok) {
      return Promise.reject({ status: userResponse.status });
    }
    if (!todosResponse.ok) {
      return Promise.reject({ status: todosResponse.status });
    }
    return Promise.all([userResponse.json(), todosResponse.json()]);
  })
  .then(function (responseBodies) {
    const fetchedUsers = responseBodies[0];
    const fetchedTodos = responseBodies[1];
    showUser(fetchedUsers, usersWrapper, fetchedTodos);
  })
  .catch(function (error) {
    console.log('Status code', error?.status);
  });
