import { useReducer } from "react";


const initialValue = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, [action.name]: state[action.name] + action.value };
        case 'decrement':
            return { ...state, [action.name]: state[action.name] - action.value };
        case 'reset':
            return { ...state, [action.name]: state[action.name] = action.value };
        default:
            return state;
    }
};

export const ReducerHook = () => {
    const [count, dispatch] = useReducer(reducer, initialValue);

    return (
        <>
            <div>
                <h3>First Counter : {count.firstCounter}</h3>
                <button onClick={() => dispatch({ name: 'firstCounter', type: 'increment', value: 1 })}>Increment first counter</button>
                <button onClick={() => dispatch({ name: 'firstCounter', type: 'decrement', value: 1 })}>Decrement first counter</button>
                <button onClick={() => dispatch({ name: 'firstCounter', type: 'reset', value: 0 })}>Reset first counter</button>
            </div>
            <div>
                <h3>Second Counter : {count.secondCounter}</h3>
                <button onClick={() => dispatch({ name: 'secondCounter', type: 'increment', value: 1 })}>Increment second counter</button>
                <button onClick={() => dispatch({ name: 'secondCounter', type: 'decrement', value: 1 })}>Decrement second counter</button>
                <button onClick={() => dispatch({ name: 'secondCounter', type: 'reset', value: 0 })}>Reset second counter</button>
            </div>

        </>
    );
};

// useReducer is a hook used for state managment, accepts 2 params, reducer function and initial state