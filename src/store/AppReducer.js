
/*
Global reducer for App. All the app reducers are defined here. But when the app grows, it is better to move the reducers for
different modules to individual reducer files. 
*/

const AppReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isLoggedIn: true,
                currentUser: action.payload
            }

        case "LOGIN_USERNAME_ERROR":
            return {
                ...state,
                loginError: action.payload
            }

        case "LOGIN_PASSWORD_ERROR":
            return {
                ...state,
                loginError: action.payload
            }

        case "CLEAR_LOGIN_ERROR":
            return {
                ...state,
                loginError: null
            }

        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                currentUser: null
            }

        case "SEARCH_DONE":
            return {
                ...state,
                searchResults: action.payload
            }

        case "SEARCH_NO_RESULTS":
            return {
                ...state,
                searchMessage: action.payload
            }

        case "CLEAR_SEARCH_MESSAGE":
            return {
                ...state,
                searchMessage: action.payload
            }

        case "CLEAR_SEARCH":
            return {
                ...state,
                searchResults: []
            }


        case "LOADING_START":
            return {
                ...state,
                isApiLoading: true
            }

        case "LOADING_DONE":
            return {
                ...state,
                isApiLoading: false
            }

        case "SHOW_HEADER":
            return {
                ...state,
                headerClass: action.payload
            }

        case "HIDE_HEADER":
            return {
                ...state,
                headerClass: ''
            }

        case "SET_GLOBAL_ERROR":
            return {
                ...state,
                globalErrors: action.payload
            }

        case "RESET_GLOBAL_ERRORS":
            return {
                ...state,
                globalErrors: ''
            }

        default:
            return state
    }
}

export default AppReducer