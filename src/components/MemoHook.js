import { useState, useMemo, useContext } from "react";
import { UserContext } from "./ContextProvider";

export const Memo = () => {
    const user = useContext(UserContext);
    console.log(user);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    // const expensiveCalculation = expFunc(counter1);
    const expensiveCalculation = useMemo(() => expFunc(counter1), [counter1]);

    function expFunc(counter) {
        console.log("expensive function called");
        return counter + 1000;
    }

    const updateUserName = () => user.updateName("akash");
    const updateUserToken = () => user.updateToken("Bearer wcb87y34uhc9u8n3rhn934yc8nh3thn");

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
            <div>
                <button onClick={updateUserName}>Update context name</button>
                <button onClick={updateUserToken}>Update context token</button>
            </div>
        </div>
    );
};