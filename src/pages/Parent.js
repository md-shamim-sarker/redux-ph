import React, {useState} from 'react';
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <div className='h-52 flex justify-center items-center'>
                <div className='w-72 border border-blue-200 p-5 rounded-lg shadow-2xl'>
                    <h2 className='text-center text-4xl font-bold mb-5'>Parent</h2>
                    <h2 className='text-center text-5xl font-bold mb-5'>{count}</h2>
                </div>
            </div>
            <Child
                count={count}
                setCount={setCount}
            ></Child>
        </div>
    );
};

export default Parent;