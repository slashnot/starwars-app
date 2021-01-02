import { useContext } from 'react';
import AppContext from 'store/AppContext';


const useAuth = () => {
    const { appDispatch } = useContext(AppContext)
    const baseUrl = 'https://swapi.dev/api'

    /* Login function
    --------------------------------------------------- */
    const login = async ({ username, password }) => {
        const url = `${baseUrl}/people/?search=${username}`
        const res = await fetch(url)
        const users = await res.json()
        let currentUser = users && users.results.length ? users.results[0] : null

        // Clear Error Messages
        appDispatch({ type: 'CLEAR_LOGIN_ERROR' })

        // Check for valid user
        if (currentUser) {
            // Check password
            if (currentUser.birth_year === password) {
                // Set  user in app store
                appDispatch({ type: 'LOGIN_SUCCESS', payload: currentUser })

                // Set values in local storage
                localStorage.setItem('isLoggedIn', true)
                localStorage.setItem('currentUser', JSON.stringify(currentUser))

                return currentUser
            }
            else {
                // password not found
                appDispatch({ type: 'LOGIN_PASSWORD_ERROR', payload: 'Password is invalid' })
            }
        }
        else {
            // User not found
            appDispatch({ type: 'LOGIN_USERNAME_ERROR', payload: 'Username not found' })
        }
        return []
    }

    /* Logout function
    --------------------------------------------------- */
    const logout = () => {
        appDispatch({ type: 'LOGOUT' })
        localStorage.clear()
    }

    return { login, logout }
}

export { useAuth }
export default useAuth