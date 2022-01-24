import { combineReducers } from "redux";
import { TodoReducer } from "./Reducers/TodoReducer";

const reducers = combineReducers({
  TodoReducer,
});

export default reducers;
