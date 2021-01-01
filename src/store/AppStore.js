
// Global store (State) for the app

const appStore = {
    isLoggedIn: localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false,
    currentUser: {},
    loginError: ''
}

export default appStore