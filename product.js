const { createStore, combineReducers } = require('redux');

// define constants
const GET_PRODUCTS = 'GET_PRODUCTS';
const ADD_PRODUCT = 'ADD_PRODUCT';
const GET_CART = 'GET_CART';
const ADD_CART = 'ADD_CART';

//product state
const productState = {
    products: ['product1', 'product2', 'product3'],
    numberOfProducts: 3
}

//cart state
const cartState = {
    cart: ['cart1', 'cart2', 'cart3'],
    numberOfProducts: 3
}

//product action
const getProducts = () => {
    return {
        type: GET_PRODUCTS
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}

//cart action

const getCart = () => {
    return {
        type: GET_CART
    }
}
const addCart = (cart) => {
    return {
        type: addCart,
        payload: cart
    }
}

//product reducer
const productReducer = (state = productState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }

}

//cart reducer
const cartReducer = (state = cartState, action) => {
    switch (action.type) {
        case GET_CART:
            return {
                ...state
            }
        case ADD_CART:
            return {
                cart: [...state.cart, action.payload],
                numberOfProducts: state.numberOfProducts + 1
            }
        default:
            return state;
    }
}

//combine reducer
const rootReducer = combineReducers({
    Product: productReducer,
    Cart: cartReducer
})


//store 
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// store.dispatch(addProduct('product4',));

store.dispatch(addCart('cart4'));

