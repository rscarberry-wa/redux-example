import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0,
    results: []
}

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const rootReducer = (state = initialState, action) => {
    console.log("[rootReducer]: action = ", action);
    const newState = {...state};
    switch (action.type) {
        case actionTypes.INCREMENT:
            newState.counter += 1;
            break;
        case actionTypes.DECREMENT:
            newState.counter -= 1;
            break;
        case actionTypes.ADD:
            newState.counter += action.value;
            break;
        case actionTypes.SUBTRACT:
            newState.counter -= action.value;
            break;
        case actionTypes.STORE_RESULT:
            newState.results = state.results.concat({
                id: uuidv4(),
                value: state.counter
            });
            break;
        case actionTypes.DELETE_RESULT:
            newState.results = state.results.filter(result => result.id !== action.value);
            break;
        default:
            return state;
    }

    return newState;
}

export default rootReducer;
