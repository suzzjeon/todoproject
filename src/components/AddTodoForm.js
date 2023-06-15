import React, { useState } from 'react';

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
      <input
        type="text"
        name="title"
        value={todo.title}
        onChange={onChangeHandler}
        placeholder="제목"
        required
      />
      <textarea
        name="body"
        value={todo.body}
        onChange={onChangeHandler}
        placeholder="내용"
        required
      ></textarea>
      <button type="submit">추가하기</button>
    </form>
  );
};

export default AddTodoForm;
