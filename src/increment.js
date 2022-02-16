import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [counter , setCounter] = useState(0);

    const Increment = () => {
        setCounter(counter + 1);
        console.log(1);
        console.log(2);
    };

    return(
        <div>
            {counter}
            <button onClick={Increment}>Increment</button>
        </div>
    );

};

export default Counter;