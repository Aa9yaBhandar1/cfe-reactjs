import React, { useEffect, useState } from "react";
import "./Todo.css";

const TodoApp = () => {
  const loadTodos = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [
      { id: 1, text: "Learn React", completed: false },
      { id: 2, text: "Build a project", completed: false },
    ];
  };

  const [todos, setTodo] = useState([]);
  const [inputValue , setInputValue] = useState('');

  //To retrieve the todos from localStorage
  useEffect(()=>{
    const storedTodos = loadTodos();
    setTodo(storedTodos);
  }, []);

  //To add todos to localStorage
  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos));
  })


  //To trim the unwanted input spaces and return only the text and add it to newTodo
  const addTodo = (e)=>{
    e.preventDefault();
    if(!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }

  //setting all the todos and new todo to the array and again cleaning the input value
  setTodo([...todos, newTodo]);
  setInputValue('');
};


//To toggle the status of todo if its completed or not  looking at the id
const toggleTodo = (id) =>{
  setTodo(todos.map(todo=>
    todo.id ===  id ? { ...todo, completed: !todo.completed } : todo
  ));
};


//to delete the completed task looking at the id
const deleteTodo = (id) =>{
  setTodo(todos.filter(todo => todo.id !== id))
};


//To clear all the tasks
const clearTodo = ()=>{
  setTodo([]);
  localStorage.removeItem('todos');
}
return(
  <>
  <nav className="todo-navbar">
    <h1>Todo App</h1>
  </nav>

  <form  className="adding-todo" onSubmit={addTodo}>
  <input
          className="todo-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new todo..."
        />
        <button  className="add-todo-button" type="submit">
          +
        </button>
  </form>

  <div className="container">
    {todos.map(todo=> (
      <div className="todo-container"
      key={todo.id}>
        <div>
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
        <div className="div-status-box">
          <button  className="todo-status"
        onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? '✓' : '○'}
              </button>
              
              <button onClick={() => deleteTodo(todo.id)}>
        ×
            </button>
            </div>
        </div>
        </div>
    ))}
  </div>
  
  <div className="todo-count">
        {todos.length} item{todos.length !== 1 ? 's' : ''} total
      </div>
  </>
);
};

export default TodoApp;

