import React from "react";

function TodoList(props) {
  return (
    <div
      onClick={() => {
        props.wantToDelete(props.id);
      }}
    >
      <li> {props.text} </li>
    </div>
  );
}

export default TodoList;
