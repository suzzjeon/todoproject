import React from "react";
import { Link } from "react-router-dom";
import "./TodoItem.css";

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
      <Link to={`/sample/${id}`}>상세페이지</Link>

      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
      <div className="button-container">
        <button className="toggle-button" onClick={handleToggle}>
          {isDone ? "🪵" : "💣"}
        </button>
        <button className="delete-button" onClick={handleDelete}>
          🧯
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
