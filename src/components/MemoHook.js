import { useState, useMemo } from "react";


export const Memo = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    // const expensiveCalculation = expFunc(counter1);
    const expensiveCalculation = useMemo(() => expFunc(counter1), [counter1]);

    function expFunc(counter) {
        console.log("expensive function called");
        return counter + 1000;
    }

    const increment1 = () => setCounter1(prev => prev + 1);
    const increment2 = () => setCounter2(prev => prev + 1);

    return (
        <div>
            <div>
                <h3>Counter 1 : {counter1}, calculation val : {expensiveCalculation}</h3>
                <button onClick={increment1}>Increment counter 1</button>
            </div>
            <hr />
            <div>
                <h3>Counter 2 : {counter2}</h3>
                <button onClick={increment2}>Increment counter 2</button>
            </div>
        </div>
    );
};