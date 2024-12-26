import Todo from "./components/Todo";

function App() {
  return (
    <main>
      <h1>Todo List</h1>
      <Todo title="Learn React" description="Learn how to use React to build web applications." />
      <Todo title="Learn JavaScript" description="Learn the programming language that powers the web." />
      <Todo title="Learn CSS" description="Learn how to style web pages." />
    </main>
  );
}

export default App