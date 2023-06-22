const ADD_TODO = "TODO/ADD_TODO";
const TOGGLE_TODO = "TODO/TOGGLE_TODO";
const DELETE_TODO = "DELETE_TODO"; // 추가된 액션

export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo }); // payload로 수정
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id }); // payload로 수정
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id }); // 추가된 액션 크리에이터

const initialState = {
  todoList: [
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
  ],
};

export const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todoList: [...state.todoList, action.payload] }; // todos를 todoList로 수정

    case TOGGLE_TODO:
      const toggleTodoReducer = state.todoList.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
      );

      return {
        ...state,
        todoList: toggleTodoReducer,
      };

    case DELETE_TODO:
      const deleteTodoReducer = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );

      return {
        ...state,
        todoList: deleteTodoReducer,
      };

    default:
      return state;
  }
};
