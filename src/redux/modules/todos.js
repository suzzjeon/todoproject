// 액션 타입 정의
const ADD_TODO = "TODO/ADD_TODO";
const TOGGLE_TODO = "TODO/TOGGLE_TODO";
const DELETE_TODO = "TODO/DELETE_TODO";

// 액션 생성자 함수
export const addTodo = (todo) => ({ type: ADD_TODO, payload: todo });
export const toggleTodo = (id) => ({ type: TOGGLE_TODO, payload: id });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });

// 초기 상태 정의
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

// 리듀서 함수
const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
};

export default todoList;
