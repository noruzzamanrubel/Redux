
//state 
// action - increment , decrement reset
// reducer 
// store

const { createStore } = require('redux');

// define constants
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// state
const initialState = {
    count: 1,
    user: ['Rubel Ahmed']
}

//action creator
const increment = (value) => {
    return {
        type: INCREMENT,
        payload: value
    }
}
const decrement = () => {
    return {
        type: DECREMENT
    }
}
const reset = () => {
    return {
        type: RESET
    }
}

// create reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                user : [...state.user, action.payload],
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                count: state.count - 1
            }
        case RESET:
            return {
                count: 0
            }
        default:
            return state;
    }
}

//store
const store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
// store.dispatch(reset());
// store.dispatch(increment());
store.dispatch(increment('Rubel Ahmed 2'));
store.dispatch(increment('Rubel Ahmed 3'));
store.dispatch(increment('Rubel Ahmed 4'));
