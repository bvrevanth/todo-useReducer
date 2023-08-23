import React, { useReducer } from "react";
import "../App.css";
import TodoList from "./TodoList";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];

    case "DELETE_TASK":
      return state.filter((d) => d.id !== action.payload);

    case "RESET_TODOS":
      return init(action.payload);

    default:
      return state;
  }
}

function init(initialState) {
  return initialState;
}

const Todos = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);
  return (
    <>
      <div className="main">
        <h4 className="heading">
          Todo List <span>[ {todos.length} ]</span>{" "}
        </h4>

        <p>
          Add New Task :
          <input
            className="input"
            type="text"
            onBlur={(e) =>
              dispatch({ type: "ADD_TASK", payload: e.target.value })
            }
          />
          <button
            className="reset"
            onClick={() =>
              dispatch({ type: "RESET_TODOS", payload: initialState })
            }
          >
            Reset
          </button>
        </p>
      </div>
      <hr />
      <TodoList todos={todos} dispatch={dispatch} />
    </>
  );
};

export default Todos;
