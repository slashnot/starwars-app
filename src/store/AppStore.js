
// Global store (State) for the app

const appStore = {
    isLoggedIn: localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false,
    currentUser: {},
    loginError: '',
    searchResults: [],
    isApiLoading: false
}

export default appStore