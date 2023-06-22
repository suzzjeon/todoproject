import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  const renderTodos = (todoList) =>
    todoList.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={() => toggleTodo(todo.id)}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    ));

  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

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
