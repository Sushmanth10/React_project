import { useReducer } from "react";

const initialState = { count: 5 };

function reducer(state, action) {
    switch (action) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            return state;
    }
}

function CounterPage() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="flex p-3 items-center gap-3">
            <div className="flex p-3 items-center gap-3">
                <button className="bg-red-300 text-lg text-white p-3 rounded-md " onClick={() => dispatch('decrement')}>-</button>
                <p>Current Count: {state.count}</p>
                <button className="bg-red-300 text-lg text-white p-3 rounded-md" onClick={() => dispatch('increment')}>+</button>
            </div>
        </div>
    )
}

export default CounterPage