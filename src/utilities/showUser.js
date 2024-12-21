import { filterUserTodos } from './filterUserTodos';

export function showUser(fetchedUsers, usersWrapper) {
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

    const loader = document.createElement('p');
    loader.innerText = 'loading...';
    loader.classList.add('loader');

    button.addEventListener('click', function () {
      userTodosWrapper.appendChild(loader);
      filterUserTodos(currentUserId, userTodosWrapper);
    });
  });
}
