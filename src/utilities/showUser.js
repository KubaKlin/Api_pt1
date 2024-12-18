import { filterUserTodos } from './filterUserTodos';
import { showUserTodos } from './showUserTodos';

export function showUser(fetchedUsers, usersWrapper, fetchedTodos) {
  fetchedUsers.forEach(function (user, index) {
    const userWrapperInfo = document.createElement('div');
    userWrapperInfo.classList.add('user-info');
    const userNameHolder = document.createElement('p');
    const userWrapper = document.createElement('div');
    userWrapper.classList.add('user-wrapper');
    const button = document.createElement('button');
    const userName = user.username;

    const userTodosWrapper = document.createElement('div');
    userTodosWrapper.classList.add('todos-wrapper');

    const currentUserId = index + 1;
    button.innerText = 'Show user tasks';

    userWrapper.classList.add('user-wrapper');
    userWrapper.appendChild(userWrapperInfo);
    usersWrapper.appendChild(userWrapper);
    userWrapperInfo.appendChild(userNameHolder);
    userWrapperInfo.appendChild(button);
    userWrapper.appendChild(userTodosWrapper);
    userNameHolder.innerText = userName;

    button.addEventListener('click', function () {
      const userTodos = filterUserTodos(currentUserId, fetchedTodos);
      showUserTodos(userTodosWrapper, userTodos);
    });
  });
}
