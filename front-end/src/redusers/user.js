import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
    USER_REGISTER_FAIL,
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
} from '../constant/userConstant'


export const userListReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_LOGIN_REQUEST: 
        return { loading: true }
      case USER_LOGIN_SUCCESS:
        return {
          loading: false,
          userIngo: action.payload,
        }
      case USER_LOGIN_FAIL:
        return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
      default:
        return state
    }
  }

  export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_REGISTER_REQUEST: 
        return { loading: true }
      case USER_REGISTER_SUCCESS:
        return {
          loading: false,
          userIngo: action.payload,
        }
      case USER_REGISTER_FAIL:
        return { loading: false, error: action.payload }
        case USER_LOGOUT:
            return {}
      default:
        return state
    }
  }