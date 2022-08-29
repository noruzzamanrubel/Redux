const { createStore } = require("redux");

//define constanc
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

//state
const initialState = {
    count: 0,
}

//action
const increment = () => {
    return {
        type: INCREMENT,
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
                ...state,
                count: state.count + 1
            }

        case DECREMENT:

            return {
                ...state,
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

const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());