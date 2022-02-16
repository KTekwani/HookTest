import React from "react";
import { useState } from "react";

const Function1 = () => {
    const [inputValue, setInputValue] = useState(" ");

    let function2 = (e) => {
        const newValue = e.target.value;
        setInputValue(newValue);
    }

    return (
        <div>
            <input placeholder="enter here.." onChange={function2}></input>
            {inputValue}
        </div>
    );
}

export default Function1