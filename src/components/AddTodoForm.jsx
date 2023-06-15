import React, { useState } from 'react';
import './AddTodoForm.css';

const AddTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: '', body: '' });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() !== '' && todo.body.trim() !== '') {
      const newTodo = { id: Date.now(), ...todo, isDone: false };
      addTodo(newTodo);
      setTodo({ title: '', body: '' });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-container">
        <div className="input-container">
          <input
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
            placeholder="Get fired up!"
            className="input-field"
            required
          />
          <textarea
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
            placeholder="🚒🚨"
            className="input-field"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">🧨</button>
      </div>
    </form>
  );
};

export default AddTodoForm;