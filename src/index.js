import './style.css';
import { showUsers } from './utilities/showUsers';

const allUsersWrapper = document.querySelector('.users-wrapper');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
    if (!response.ok) {
      return Promise.reject({ status: response.status });
    }
    return response.json();
  })
  .then(function (response) {
    showUsers(response, allUsersWrapper);
  })
  .catch(function (error) {
    console.log('Status code', error?.status);
  });
