import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, title, body, isDone } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <div className="todo-card">
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
      <button className="toggle-button" onClick={handleToggle}>{isDone ? '취소' : '완료'}</button>
      <button className="delete-button" onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default TodoItem;
