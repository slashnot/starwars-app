
import { useState } from 'react'
import AppContext from 'store/AppContext';
import { useContext } from 'react';


const useAuth = () => {
    const [isLoggedIn, setLogin] = useState(false)
    const [currentUser, setCurrentUser] = useState({})
    const { appDispatch } = useContext(AppContext)
    const baseUrl = 'https://swapi.dev/api'

    /* Login function
    --------------------------------------------------- */
    const login = async ({ username, password }) => {
        const url = `${baseUrl}/people/?search=${username}`
        const res = await fetch(url)
        const users = await res.json()

        // Check for valid user
        if (users && users.results.length) {
            // Set  user in app store
            appDispatch({ type: 'LOGIN_SUCCESS', payload: users.results[0] })

            // Set values in local storage
            localStorage.setItem('isLoggedIn', true)
            localStorage.setItem('currentUser', JSON.stringify(users.results[0]))

            // Update local state
            setLogin(true)
            setCurrentUser(users.results[0])

            return currentUser
        }

        return []
    }

    return { login, isLoggedIn, currentUser }
}

export default useAuth