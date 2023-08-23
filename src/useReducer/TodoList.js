import React from "react";

const TodoList = ({ todos, dispatch }) => {
  return (
    <>
      <div className="todos-list">
        {todos.map((todo) => (
          <li className="todos" style={{ fontSize: "24px" }} key={todo.id}>
            {todo.name}

            <button
              className="delete"
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: todo.id })
              }
            >
              ❌
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default TodoList;
