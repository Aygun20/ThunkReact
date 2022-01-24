import { TYPES } from "./Action_Types";
import axios from "axios";

const addTodo = (todo) => {
  return { type: TYPES.ADD_TODO, payload: todo };
};

const fetchTodosStarted = () => {
  return { type: TYPES.FETCH_TODOS_STARTED };
};

const fetchTodosFailed = (error) => {
  return { type: TYPES.FETCH_TODOS_FAILED, payload: error };
};

const fetchTodosSucceed = (todos) => {
  return { type: TYPES.FETCH_TODOS_SUCCEED, payload: todos };
};

const setTodos = () => {
  return function (dispatch, getState) {
    dispatch(fetchTodosStarted());
    axios
      .get("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => {
        dispatch(fetchTodosSucceed(response.data));
      })
      .catch((error) => {
        dispatch(fetchTodosFailed(error.message));
      });
  };
};

const todoActions = {
  addTodo,
  setTodos,
};

export default todoActions;
