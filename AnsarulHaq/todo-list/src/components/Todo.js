import React from "react";
import "./Todo.css";
function Todo({ title, description }) {
  const handleDelete=()=>{
    alert("delete icon clicked!");
  };
  return (
    <div className="todo">
      <h2 className="todo--title">
        {title}
      </h2>
      <p className="todo--description">
        {description}
      </p>
      <button className="todo--button-delete" onClick={handleDelete}>
        <span className="material-symbols-outlined">
delete
</span></button>
    </div>
  );
}

export default Todo;