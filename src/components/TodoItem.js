import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, title, body, isDone } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={handleToggle}>{isDone ? '취소' : '완료'}</button>
      <button onClick={handleDelete}>삭제</button>
    </li>
  );
};

export default TodoItem;
