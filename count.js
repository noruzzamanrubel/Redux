const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

//define constanc
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

//state
const initialState = {
    count: 1,
    user: ['Rubel 1']
}

//action
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const decrement = () => {
    return {
        type: DECREMENT,
    }
}
const reset = () => {
    return {
        type: RESET,
    }
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:

            return {
                user: [...state.user, action.payload],
                count: state.count + 1
            }

        case DECREMENT:

            return {
                count: state.count - 1
            }
        case RESET:

            return {
                user: 0,
                count: 0
            }

        default:
            return state;
    }
}

const store = createStore(countReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment('Rubel 2'));
store.dispatch(increment('Rubel 3 '));
store.dispatch(increment('Rubel 4'));
store.dispatch(decrement('hi'));
// store.dispatch(reset());
