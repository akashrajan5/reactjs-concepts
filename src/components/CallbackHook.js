import { useCallback, useState } from 'react';
import Todos from './Todos';


export function Callback() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const countIncrement = () => {
        console.log("count increment handler rendered");
        setCount(c => c + 1);
    };

    const addTodo = useCallback(() => {
        console.log("add todos rendered");
        setTodos((t) => [...t, "New Todo"]);
    }, []);

    // const addTodo = () => setTodos(prevTodo => [...prevTodo, "New Todo created"]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                <h3>Count: {count}</h3>
                <button onClick={countIncrement}>+</button>
            </div>
        </>
    );
}