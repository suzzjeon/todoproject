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
      <button className="toggle-button" onClick={handleToggle}>{isDone ? 'Return to the Fire 🔥' : 'Ready to Sparkle ✨'}</button>
      <button className="delete-button" onClick={handleDelete}>Burned to Ashes 🌪️</button>
    </div>
  );
};

export default TodoItem;
