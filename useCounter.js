import { useState } from "react";

export const useCounter = (initialCounter = 1) => {
    const [counter, setCounter] = useState(initialCounter);
    const increment = (max) => {
        const fixCounter = counter + 1
        const validMax = fixCounter > max ? max : fixCounter
        setCounter(validMax)
    };
    const reset = () => {
        setCounter(initialCounter)
    };

    const decrement = (min) => {
        const minimalDecrement = counter - 1
        const validMin = minimalDecrement < min ? min : minimalDecrement
        setCounter(validMin)
    };

    return {
        counter,
        increment,
        decrement,
        reset
    }
}



