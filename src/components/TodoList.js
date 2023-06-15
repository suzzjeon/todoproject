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
    <div className="todo-list">
      <h2> Burning .. 🔥</h2>
      <div className="todo-card-container">
        {renderTodos(workingTodos)}
      </div>
      <h2> Fireworks .. 💥 </h2>
      <div className="todo-card-container">
        {renderTodos(doneTodos)}
      </div>
    </div>
  );
};


export default TodoList;
