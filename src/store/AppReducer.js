
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

        case "CLEAR_SEARCH":
            return {
                ...state,
                searchResults: []
            }


        default:
            return state
    }
}

export default AppReducer