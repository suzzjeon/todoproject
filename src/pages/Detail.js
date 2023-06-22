import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
  const todo = todos && todos.find((item) => item.id === id);

  if (!id) {
    return <div>Invalid ID</div>;
  }

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.body}</p>
      <p>Status: {todo.isDone ? "Done" : "Not Done"}</p>
    </div>
  );
}

export default Detail;
