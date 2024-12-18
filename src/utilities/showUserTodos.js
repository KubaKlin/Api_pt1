export function showUserTodos(userTodosWrapper, userTodos) {
  return new Promise(function (resolve) {
    userTodos.forEach(function (userTodo) {
      const userTodoWrapper = document.createElement('div');
      userTodoWrapper.classList.add('user-todo');
      userTodosWrapper.appendChild(userTodoWrapper);
      const userTodoTitle = document.createElement('p');
      const userTodoState = document.createElement('p');
      userTodoWrapper.appendChild(userTodoTitle);
      userTodoWrapper.appendChild(userTodoState);
      userTodoTitle.innerText = userTodo.title;
      if (Boolean(userTodo.completed)) {
        userTodoState.innerText = 'completed';
        userTodoState.classList.add('error');
      } else {
        userTodoState.innerText = 'to do';
        userTodoState.classList.add('success');
      }
      resolve();
    });
  });
}
