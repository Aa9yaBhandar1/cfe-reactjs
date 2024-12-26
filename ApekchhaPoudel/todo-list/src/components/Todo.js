import React from "react";

import "./Todo.css";

function Todo({ title, description }) {
  const handleDelete = () => {
    alert("Delete button clicked");
  };
  return (
    <div className="todo">
      <h2 className="todo--title">{title}</h2>
      <p className="todo--description">{description}</p>

      <button className="todo--button-delete" onClick={handleDelete}>
        <span className="material-symbols-outlined"></span>
      </button>
    </div>
  );
}

export default Todo;