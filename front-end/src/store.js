import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {productListReducer, productDetailsReducer} from './redusers/product'
import {cartListReducer} from './redusers/cart'

const reducer = combineReducers({
productList: productListReducer,
productDetails: productDetailsReducer, 
cart: cartListReducer,
})

const getItems = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[]

const initialState = {
  cart : {cartItems : getItems}
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  ) 
  
  
export default store