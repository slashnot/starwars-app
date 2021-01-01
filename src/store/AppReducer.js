
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

        default:
            return state
    }
}

export default AppReducer