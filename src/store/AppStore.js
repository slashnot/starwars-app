
// Global store (State) for the app

const appStore = {
    isLoggedIn: localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : false,
    currentUser: {},
    loginError: '',
    searchResults: [],
    searchMessage: 'Search for Planets',
    isApiLoading: false,
    headerClass: ''
}

export default appStore