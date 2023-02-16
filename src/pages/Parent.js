import React, {useContext} from 'react';
import {COUNTER_CONTEXT} from '../App';
import Child from './Child';

const Parent = () => {
    const {count} = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <div className='h-52 flex justify-center items-center'>
                <div className='w-72 border border-blue-200 p-5 rounded-lg shadow-2xl'>
                    <h2 className='text-center text-4xl font-bold mb-5'>Parent</h2>
                    <h2 className='text-center text-5xl font-bold mb-5'>{count}</h2>
                </div>
            </div>
            <Child></Child>
        </div>
    );
};

export default Parent;