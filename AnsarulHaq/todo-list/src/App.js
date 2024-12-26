import Todo from "./components/Todo";
import { todos } from "./data/todo";
import { useState } from "react";

function App() {
    const [task, setTask] = useState("");
    const addTask=()=>{
       
    }
    const deleteTask=()=>{
        
    }
    const deleteAllTask=()=>{
        
    }
  return (
    <>
      <nav className="nav">
        <h1>Todo App</h1>
      </nav>

      <main className="main">
        <div className="form">
            <input name="task" type="text" placeholder="Enter task here!" 
            value={task}
            onChange={(e)=> setTask(e.target.value)}
            />
        </div>
        {todos.map((todo, index) => {
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