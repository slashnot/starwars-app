// Serive for Authentication functionality
import { config } from 'config'

const baseUrl = config.baseUrl
const authService = {

    /* Check user from API
    ------------------------------------------------------------ */
    async userLogin({ username }) {
        const url = `${baseUrl}/people/?search=${username}`
        const res = await fetch(url)
        const users = await res.json()
        return users && users.results.length ? users.results[0] : null
    },

    /* Check for user password and return the user is valid
   ------------------------------------------------------------ */
    isValidUser(currentUser, { password }) {
        if (currentUser.birth_year === password) {
            return true
        }
        else {
            return false
        }
    },

    /* Return the current user login status
   ------------------------------------------------------------ */
    isLoggedIn() {
        if (JSON.parse(localStorage.getItem('isLoggedIn')))
            return JSON.parse(localStorage.getItem('currentUser'))

        else
            return false
    }
}

export { authService }
export default authService