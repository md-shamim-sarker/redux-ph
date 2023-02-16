import React, {useReducer} from 'react';

const CounterTest = () => {

    const initialState = 0;

    const reducer = (state, action) => {
        switch(action.type) {
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='mt-20 flex justify-center items-center'>
            <div className='w-72 border border-blue-200 p-5 rounded-lg shadow-2xl'>
                <h2 className='text-center text-5xl font-bold mb-5'>{state}</h2>
                <div className='flex justify-around'>
                    <button className='bg-blue-700 px-3 py-2 rounded-lg text-white hover:bg-gray-700 transition-all' onClick={() => dispatch({type: "DECREMENT"})}>Decrement</button>
                    <button className='bg-blue-700 px-3 py-2 rounded-lg text-white hover:bg-gray-700 transition-all' onClick={() => dispatch({type: "INCREMENT"})}>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default CounterTest;