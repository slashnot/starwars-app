import { useContext } from 'react'
import AppContext from 'store/AppContext'
import { authService } from 'services'
import { useFetchApi } from 'hooks/useFetchApi'

const useAuth = () => {
    const { appDispatch } = useContext(AppContext)
    const fetchApi = useFetchApi()

    /* CHeck Username from API response
    --------------------------------------------------- */
    const userLogin = async ({ username }) => {
        const url = `/people/?search=${username}`
        const res = await fetchApi(url)
        const users = await res.json()

        return users && users.results.length ? users.results : null
    }

    /* Login function
    --------------------------------------------------- */
    const login = async ({ username, password }) => {
        // Clear Error Messages
        appDispatch({ type: 'CLEAR_LOGIN_ERROR' })

        return userLogin({ username, password })
            .then(userResults => {
                let currentUser = null

                if (userResults && userResults.length > 1) {
                    
                    // Multiple users found
                    appDispatch({ type: 'LOGIN_USERNAME_ERROR', payload: 'Username Invalid. Enter the full username' })
                    return
                }
                else {
                    currentUser = userResults ? userResults[0] : null
                }

                if (currentUser) {
                    if (authService.isValidUser(currentUser, { username, password })) {
                        // Set  user in app store
                        appDispatch({ type: 'LOGIN_SUCCESS', payload: currentUser })
                        // Set values in local storage
                        localStorage.setItem('isLoggedIn', true)
                        localStorage.setItem('currentUser', JSON.stringify(currentUser))
                    }

                    else
                        // password not found
                        appDispatch({ type: 'LOGIN_PASSWORD_ERROR', payload: 'Password is invalid' })
                }
                else {
                    // User not found
                    appDispatch({ type: 'LOGIN_USERNAME_ERROR', payload: 'Username not found' })
                }
            })
    }

    /* Logout function
    --------------------------------------------------- */
    const logout = () => {
        appDispatch({ type: 'LOGOUT' })
        appDispatch({ type: 'CLEAR_SEARCH' })
        localStorage.clear()
    }

    return { login, logout }
}

export { useAuth }
export default useAuth