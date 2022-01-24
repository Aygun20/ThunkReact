import { TYPES } from "../../Redux/Action/Action_Types";

const initialState = {
  todos: [],
  todosLoading: false,
  todosError: null,
};

export const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };

    case TYPES.FETCH_TODOS_SUCCEED:
      return {
        ...state,
        todos: action.payload,
        todosLoading: false,
        todosError: null,
      };

    case TYPES.FETCH_TODOS_STARTED:
      return { ...state, todosLoading: true };

    case TYPES.FETCH_TODOS_FAILED:
      return { ...state, todosError: action.payload, todosLoading: false };

    default:
      return state;
  }
};
