import { fetchUserTodos } from './fetchUserTodos';

export function showUsers(fetchedUsers, allUsersWrapper) {
  fetchedUsers.forEach(function (user) {
    const userWrapperInfo = document.createElement('div');
    userWrapperInfo.classList.add('user-info');
    const userNameHolder = document.createElement('p');
    const userWrapper = document.createElement('div');
    userWrapper.classList.add('user-wrapper');
    const button = document.createElement('button');
    const userName = user.username;

    const userTodosWrapper = document.createElement('div');
    userTodosWrapper.classList.add('todos-wrapper');

    const currentUserId = user.id;
    button.innerText = 'Show user tasks';

    userWrapper.classList.add('user-wrapper');
    userWrapper.appendChild(userWrapperInfo);
    allUsersWrapper?.appendChild(userWrapper);
    userWrapperInfo.appendChild(userNameHolder);
    userWrapperInfo.appendChild(button);
    userWrapper.appendChild(userTodosWrapper);
    userNameHolder.innerText = userName;

    const loader = document.createElement('p');
    loader.innerText = 'loading...';
    loader.classList.add('loader');

    button.addEventListener('click', function () {
      if (userTodosWrapper.hasChildNodes()) {
        button.innerText = 'Show user tasks';
        while (userTodosWrapper.firstChild) {
          userTodosWrapper.removeChild(userTodosWrapper.firstChild);
        }
      } else {
        button.innerText = 'hide';
        userTodosWrapper.appendChild(loader);
        fetchUserTodos(currentUserId, userTodosWrapper);
      }
    });
  });
}
