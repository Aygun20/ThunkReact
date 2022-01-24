import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import todoActions from "../Redux/Action/TodoListAction";
import "antd/dist/antd.css";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const TodoList = () => {
  const { todos, todosLoading, todosError } = useSelector(
    (state) => state.TodoReducer
  );
  const dispatch = useDispatch();
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const getTodos = async function () {
    dispatch(todoActions.setTodos());
  };

  return (
    <>
      <button onClick={() => getTodos()}>set TODO</button>
      <br />
      {todosLoading ? (
        <Spin spinning={true} indicator={antIcon} />
      ) : todosError !== null ? (
        todosError
      ) : (
        <ul>
          {todos.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      )}
    </>
  );
};
