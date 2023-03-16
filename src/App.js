import { useCallback, useState } from 'react';
import './App.css';
import Todos from './components/Todos';


function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    console.log("inc rendered");
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    console.log("add todo rendered");
    setTodos((t) => [...t, "New Todo"]);
  }, []);

  console.log("App rendered");
  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        <h3>Count: {count}</h3>
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}

export default App;
