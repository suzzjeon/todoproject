import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  const { id, title, body, isDone } = todo;

  const handleToggle = () => {
    toggleTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <TodoCard>
      <Link to={`/Detail/${id}`}>상세보기</Link>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <ButtonContainer>
        <ToggleButton onClick={handleToggle}>
          {isDone ? "🪵" : "💣"}
        </ToggleButton>
        <DeleteButton onClick={handleDelete}>🧯</DeleteButton>
      </ButtonContainer>
    </TodoCard>
  );
};

export default TodoItem;

const TodoCard = styled.div`
  width: 250px;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  text-align: center;
`;

const CardBody = styled.p`
  margin: 10px 0;
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const ToggleButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 10rem;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 2em;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;

const DeleteButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 10rem;
  cursor: pointer;
  border: none;
  background-color: #fff;
  font-size: 2em;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;
