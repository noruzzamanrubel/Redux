const { default: axios } = require('axios');
const { createStore, applyMiddleware } = require('redux');
const { default: thunk } = require('redux-thunk');

// define constants
const TODOS_REQUEST = 'TODOS_REQUEST';
const TODOS_SUCCESS = 'TODOS_SUCCESS';
const TODOS_FAILURE = 'TODOS_FAILURE';
const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// state
const initialState = {
    todos: [],
    isLoading: false,
    error: null
}

// action creator
const todosRequest = () => {
    return {
        type: TODOS_REQUEST
    }
}

const todosSuccess = (todos) => {
    return {
        type: TODOS_SUCCESS,
        payload: todos
    }
}

const todosFailure = (error) => {
    return {
        type: TODOS_FAILURE,
        payload: error
    }
}

// reducer
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
            }
        case TODOS_FAILURE:

            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
    }
}

//async action creator
const fetchData = () => {

    return (dispatch) => {
        dispatch(todosRequest());
        axios
            .get(API_URL)
            .then(res => {
                const todos = res.data;
                const title = todos.map((todo) => todo.title);
                dispatch(todosSuccess(title));
            })
            .catch(err => {
                const errorMsg = err.message;
                dispatch(todosFailure(errorMsg));
            });
    }
}


// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState());
});

// dispatch
store.dispatch(fetchData());
