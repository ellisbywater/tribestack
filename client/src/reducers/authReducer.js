import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS
} from '../actions/types'

const initialState = {
    token: localStorage.getItem("jwt"),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state = initialState, action) {
    switch(action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("jwt", action.payload.jwt)
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAILURE:
        case LOGOUT_SUCCESS:
            localStorage.removeItem("jwt")
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default:
            return state
    }
}