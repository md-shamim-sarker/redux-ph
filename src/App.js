import React, {createContext, useState} from 'react';
import Counter from './pages/Counter';
// import CounterTest from './pages/CounterTest';
// import Parent from './pages/Parent';

export const COUNTER_CONTEXT = createContext();

const App = () => {
  const [count, setCount] = useState(0);
  const value = {count, setCount};
  return (
    <COUNTER_CONTEXT.Provider value={value}>
      <div>
        {/* <Parent></Parent> */}
        <Counter></Counter>
        {/* <CounterTest></CounterTest> */}
      </div>
    </COUNTER_CONTEXT.Provider>
  );
};

export default App;