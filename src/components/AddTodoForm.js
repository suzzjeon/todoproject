import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'body') {
      setBody(value);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), title, body, isDone: false };
    addTodo(newTodo);
    setTitle('');
    setBody('');
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeHandler}
        placeholder="제목"
        required
      />
      <textarea
        name="body"
        value={body}
        onChange={onChangeHandler}
        placeholder="내용"
        required
      ></textarea>
      <button type="submit">추가하기</button>
    </form>
  );
};

export default AddTodoForm;
