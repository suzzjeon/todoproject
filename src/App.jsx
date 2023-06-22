import React, { useEffect } from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import { useLocalStorage } from "./hooks/useLocalStorage";

import { useSelector, useDispatch } from "react-redux";

import { addTodo } from "./redux/modules/todoReducer";

import "./App.css";

/**
 * Redux 2가지
 * 1. store에 있는 값을 읽어오기
 * useSelector hooks
 *
 * 2. store에 있는 값을 변경하기 (한가지 방법 밖에 없음)
 * useDispatch hooks
 */

const App = () => {
  const { todos } = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (todos.length === 0) {
      // setTodos(exampleTodos);
    }
  }, []);

  const addTodoItem = (todo) => {
    dispatch(addTodo(todo));

    // setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    //   )
    // );
  };

  const deleteTodo = (id) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container">
      <h1>let's burn ❤️‍🔥</h1>
      <AddTodoForm addTodo={addTodoItem} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
