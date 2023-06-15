import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const renderTodos = (todoList) =>
    todoList.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ));

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <div>
      <h2>Working.. 🔥</h2>
      <ul>{renderTodos(workingTodos)}</ul>
      <h2>Done..! 🎉</h2>
      <ul>{renderTodos(doneTodos)}</ul>
    </div>
  );
};

export default TodoList;