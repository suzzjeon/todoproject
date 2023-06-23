import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todoList } = useSelector((state) => state.todoList);

  const renderTodos = (todoList) => {
    return todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />);
  };

  const workingTodos = todoList.filter((todo) => !todo.isDone);
  const doneTodos = todoList.filter((todo) => todo.isDone);

  return (
    <StTodoList>
      <h2> Burning .. 🔥</h2>
      <div className="todo-card-container">{renderTodos(workingTodos)}</div>
      <h2> Fireworks .. 💥 </h2>
      <div className="todo-card-container">{renderTodos(doneTodos)}</div>
    </StTodoList>
  );
};

export default TodoList;

const StTodoList = styled.div`
  .todo-card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
`;
