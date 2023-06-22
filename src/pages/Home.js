import { useDispatch } from "react-redux";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import { addTodo, toggleTodo, deleteTodo } from "../redux/modules/todos";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Home = () => {
  const dispatch = useDispatch();
  const [localTodoList, setLocalTodoList] = useLocalStorage("todoList", [
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
  ]);

  const addTodoHandler = (todo) => {
    const updatedTodoList = [...localTodoList, todo];
    setLocalTodoList(updatedTodoList);
    dispatch(addTodo(todo));
  };

  const toggleTodoHandler = (id) => {
    const updatedTodoList = localTodoList.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setLocalTodoList(updatedTodoList);
    dispatch(toggleTodo(id));
  };

  const deleteTodoHandler = (id) => {
    const updatedTodoList = localTodoList.filter((todo) => todo.id !== id);
    setLocalTodoList(updatedTodoList);
    dispatch(deleteTodo(id));
  };

  return (
    <div className="app-container">
      <h1>let's burn ❤️‍🔥</h1>
      <AddTodoForm addTodo={addTodoHandler} />
      <TodoList
        todos={localTodoList}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
    </div>
  );
};

export default Home;
