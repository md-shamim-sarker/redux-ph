import React, {useReducer} from 'react';

const Counter = () => {
    const initialState = 0;
    const reducer = (state, action) => {
        console.log(action);
        if(action.type === "INCREMENT") {
            return state + action.payload.data;
        } else if(action.type === "DECREMENT") {
            return state - action.payload.data;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='mt-20 flex justify-center items-center'>
            <div className='w-72 border border-blue-200 p-5 rounded-lg shadow-2xl'>
                <h2 className='text-center text-5xl font-bold mb-5'>{state}</h2>
                <div className='flex justify-around'>
                    <button className='bg-blue-700 p-2 rounded-lg text-white hover:bg-gray-700 transition-all' onClick={() => dispatch({type: "DECREMENT", payload: {data: 5}})}>Decrement</button>
                    <button className='bg-blue-700 p-2 rounded-lg text-white hover:bg-gray-700 transition-all' onClick={() => dispatch({type: "INCREMENT", payload: {data: 5}})}>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default Counter;