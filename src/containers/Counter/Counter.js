import React from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
    return (
        <div>
            <CounterOutput value={props.counter}/>
            <CounterControl label={"Increment"} clicked={props.onIncrementCounter}/>
            <CounterControl label={"Decrement"} clicked={props.onDecrementCounter}/>
            <CounterControl label={"Add 5"} clicked={() => props.onAdd(5)}/>
            <CounterControl label={"Subtract 5"} clicked={() => props.onSubtract(5)}/>
            <hr/>
            <button onClick={props.onStoreResult}>Store Result</button>
            <ul>
                {props.results.map(result => (
                    <li key={result.id} onClick={() => props.onDeleteResult(result.id)}>{result.value}</li>
                ))}
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
        results: state.results
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({
            type: actionTypes.INCREMENT
        }),
        onDecrementCounter: () => dispatch({
            type: actionTypes.DECREMENT
        }),
        onAdd: (n) => dispatch({
            type: actionTypes.ADD,
            value: n
        }),
        onSubtract: (n) => dispatch({
            type: actionTypes.SUBTRACT,
            value: n
        }),
        onStoreResult: () => dispatch({
            type: actionTypes.STORE_RESULT
        }),
        onDeleteResult: (id) => dispatch({
            type: actionTypes.DELETE_RESULT,
            value: id
        })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);