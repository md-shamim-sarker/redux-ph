import React, {useContext} from 'react';
import {COUNTER_CONTEXT} from '../App';

const Child = () => {
    const {count, setCount} = useContext(COUNTER_CONTEXT);
    return (
        <div className='flex justify-center items-center'>
            <div className='w-72 border border-blue-200 p-5 rounded-lg shadow-2xl'>
                <h2 className='text-center text-5xl font-bold mb-5'>{count}</h2>
                <div className='flex justify-around'>
                    <button className='bg-blue-700 p-2 rounded-lg text-white hover:bg-gray-700 transition-all' onClick={() => setCount(count - 1)
                    }>Decrement</button>
                    <button className='bg-blue-700 p-2 rounded-lg text-white hover:bg-gray-700 transition-all' onClick={() => setCount((prvState) => prvState + 1)}>Increment</button>
                </div>
            </div>
        </div>
    );
};

export default Child;