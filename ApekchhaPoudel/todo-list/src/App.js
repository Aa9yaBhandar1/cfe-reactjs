import { useState } from "react";
import Todo from "./components/Todo.js";


import { todos } from "./data/todo.js";


function App() {
  const[tasks, setTask]=useState("")
  const addTask=()=>{};
  //to delete tasks
  const deleteTask =()=>{}
  return (
    <>
      <nav
       className="nav"
      >
        <h1>Todo App</h1>
        
      </nav>

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {
        todos.map((todo, index) => {
          //   const title = todo.title;
          //   const description = todo.description;
          const { title, description } = todo;
          return <Todo key={index} title={title} description={description} />;
        })}
      </main>
    </>
  );
}

export default App;