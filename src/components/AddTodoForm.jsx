import React, { useState } from "react";
import styled from "styled-components";

const AddTodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({ title: "", body: "" });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() !== "" && todo.body.trim() !== "") {
      const newTodo = { id: Date.now(), ...todo, isDone: false };
      addTodo(newTodo);
      setTodo({ title: "", body: "" });
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <FormContainer>
        <InputContainer>
          <InputField
            type="text"
            name="title"
            value={todo.title}
            onChange={onChangeHandler}
            placeholder="Get fired up!"
            required
          />
          <TextArea
            name="body"
            value={todo.body}
            onChange={onChangeHandler}
            placeholder="🚒🚨"
            required
          ></TextArea>
        </InputContainer>
        <SubmitButton type="submit">🧨</SubmitButton>
      </FormContainer>
    </form>
  );
};

export default AddTodoForm;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  flex-grow: 1;
  margin-right: 5px;
`;

const InputField = styled.input`
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 0.5rem;

  &::placeholder {
    text-align: center;
  }
`;

const TextArea = styled.textarea`
  width: 95%;
  padding: 0.5rem;
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 0.5rem;

  &::placeholder {
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem;
  background-color: transparent;
  border: none;
  border-radius: 20rem;
  cursor: pointer;
  font-size: 3rem;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;
