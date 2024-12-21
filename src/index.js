import './style.css';
import { showUser } from './utilities/showUser';

const usersWrapper = document.querySelector('.users-wrapper');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    if (!response.ok) {
      return Promise.reject({ status: response.status });
    }
    return response.json();
  })
  .then(function (responseBodies) {
    const fetchedUsers = responseBodies;
    showUser(fetchedUsers, usersWrapper);
  })
  .catch(function (error) {
    console.log('Status code', error?.status);
  });
