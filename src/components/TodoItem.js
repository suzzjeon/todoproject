import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, title, body, isDone } = todo;

  return (
    <li>
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={() => toggleTodo(id)}>
        {isDone ? '취소' : '완료'}
      </button>
      <button onClick={() => deleteTodo(id)}>삭제</button>
    </li>
  );
};

export default TodoItem;
