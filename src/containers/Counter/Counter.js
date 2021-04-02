import React, { useState } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {

    // Just an integer count
    const [counter, setCounter] = useState(0);
    // An array of js objects containing a Date for a key and the integer count.
    const [results, setResults] = useState([]);

    const counterChangedHandler = (action, value) => {
        switch(action) {
            case 'inc':
                setCounter(counter + 1);
                break;
            case 'dec':
                setCounter(counter - 1);
                break;
            case 'add':
                setCounter(counter + value);
                break;
            case 'sub':
                setCounter(counter - value);
                break;
            default:
                console.log("Unknown action: ", action);
                break;
        }
    }

    const storeResultHandler = () => {
        setResults(results.concat({
            id: new Date(),
            value: counter
        }));
    }

    const deleteResultHandler = (id) => {
        setResults(results.filter(result => result.id !== id));
    }

    return (
        <div>
            <CounterOutput value={counter} />
            <CounterControl label={"Increment"} clicked={() => counterChangedHandler('inc')} />
            <CounterControl label={"Decrement"} clicked={() => counterChangedHandler('dec')} />
            <CounterControl label={"Add 5"} clicked={() => counterChangedHandler('add', 5)} />
            <CounterControl label={"Subtract 5"} clicked={() => counterChangedHandler('sub', 5)} />
            <hr />
            <button onClick={storeResultHandler}>Store Result</button>
            <ul>
                {results.map(result => (
                    <li key={result.id} onClick={() => deleteResultHandler(result.id)}>{result.value}</li>
                ))}
            </ul>
        </div>
    );
}

export default Counter;