
/*
Global reducer for App. All the app reducers are defined here. But when the app grows, it is better to move the reducers for
different modules to individual reducer files. 
*/

const AppReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return {
                ...state,
                user: "RAM KUMAR"
            }

        default:
            return state
    }
}

export default AppReducer