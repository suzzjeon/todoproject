import React, { useState, useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./components/UseLocalStorage";
import './App.css';

const App = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    const exampleTodos = [
      {
        id: 1,
        title: "끝내주게 자기",
        body: "아침 8시까지 풀 숙면 취하기",
        isDone: true,
      },
      {
        id: 2,
        title: "끝내주게 놀기",
        body: "노래방 갔다가 취해서 귀가하기",
        isDone: false,
      },
    ];

    if (todos.length === 0) {
      setTodos(exampleTodos);
    }
  }, []); 
  
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>let's burn ❤️‍🔥</h1>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
