import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./redusers/product";
import { cartListReducer } from "./redusers/cart";
import { userListReducer,userRegisterReducer, userDetailsReducer, updateUserProfileReducer } from "./redusers/user";
import { orderCreateReducer, orderDetailsReducer } from "./redusers/order";

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartListReducer,
  userLogin: userListReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: updateUserProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
});

const getItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const userInfo = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}

const initialState = {
  cart: { cartItems: getItems, shippingAddress: shippingAddressFromStorage },
  userLogin: { userInfo },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
