const ADD_TODO = "ADD_TODO";

const initialTodos = [
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

// action creators

export const addTodo = (todo) => {
  return {
    type: ADD_TODO,
    payload: todo,
  };
};

// Initial State
const initialState = {
  todos: initialTodos,
};

// Reducer 기본형태
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      return state;
  }
};

// export default reducer
export default todoReducer;
