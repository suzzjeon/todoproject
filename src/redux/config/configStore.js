import { combineReducers, createStore } from "redux";
import { todoList } from "../modules/todos";

const rootReducer = combineReducers({
  todoList,
});

const store = createStore(rootReducer);

export default store;
