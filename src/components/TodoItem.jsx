import React from "react";
import { Link } from "react-router-dom";
import { toggleTodo, deleteTodo } from "../redux/modules/todos";
import styled from "styled-components";
import usePost from "../hook/usePost";

const TodoItem = ({ todo }) => {
  const { id, title, body, isDone } = todo;
  const postHandler = usePost();

  return (
    <TodoCard>
      <StyleLink to={`/Detail/${id}`}>상세보기</StyleLink>
      <CardTitle>{title}</CardTitle>
      <CardBody>{body}</CardBody>
      <ButtonContainer>
        <ToggleButton onClick={() => postHandler(toggleTodo, id)}>
          {isDone ? "🪵" : "💣"}
        </ToggleButton>
        <DeleteButton onClick={() => postHandler(deleteTodo, id)}>
          🧯
        </DeleteButton>
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
  font-size: 2rem;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;

const StyleLink = styled(Link)`
  border-radius: 10px;
  cursor: pointer;
  color: #fd6f6f;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    box-shadow: 0px 0px 10px 2px rgba(255, 0, 0, 0.5);
  }
`;
