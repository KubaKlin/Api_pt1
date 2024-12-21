import { showUserTodos } from './showUserTodos';

export function filterUserTodos(currentUserId, userTodosWrapper) {
  fetch(`https://jsonplaceholder.typicode.com/todos?userId=${currentUserId}`)
    .then(function (response) {
      if (!response.ok) {
        return Promise.reject({ status: response.status });
      }
      return response.json();
    })
    .then(function (responseBodies) {
      const userTodos = responseBodies;
      showUserTodos(userTodosWrapper, userTodos)
        .then(function () {
          const loaderToRemove = document.querySelector('.loader');
          loaderToRemove.remove();
        })
    })
    .catch(function (error) {
      console.log('Status code', error?.status);
    });
}
