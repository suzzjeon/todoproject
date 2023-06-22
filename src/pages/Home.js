import { useDispatch, useSelector } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { addTodo, toggleTodo, deleteTodo } from "../redux/modules/todos";

const Home = () => {
  const dispatch = useDispatch();
  const todoStore = useSelector((state) => state.todoList);

  const addTodoHandler = (todo) => {
    dispatch(addTodo(todo));
  };

  const toggleTodoHandler = (id) => {
    dispatch(toggleTodo(id));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="app-container">
      <h1>let's burn ❤️‍🔥</h1>
      <AddTodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={todoStore.todoList}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  );
};

export default Home;
