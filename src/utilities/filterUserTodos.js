export function filterUserTodos(currentUserId, fetchedTodos) {
  return fetchedTodos.filter(function (todo) {
    return todo.userId === currentUserId;
  });
}
