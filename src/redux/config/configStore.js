import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import todoList from "../modules/todos";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "todo",
  storage,
};

const rootReducer = combineReducers({
  todoList,
});

const enhanceReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(enhanceReducer);
const persistor = persistStore(store);

export { store, persistor };
