// Login Page
import { useContext } from 'react'
import useAuth from 'hooks/useAuth'
import AppContext from 'store/AppContext'
import LoginForm from 'components/ui-components/LoginForm'
import './LoginPage.scss'
import logo from 'assets/img/logo.png'


const LoginPage = () => {
    const { login } = useAuth()
    const { appState } = useContext(AppContext)

    /* Handle login form Submit
    --------------------------------------------------- */
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        const credentials = { username: e.target.username.value, password: e.target.password.value }
        login(credentials)
    }

    /*-------------------------------------------------- */

    return (
        <div className="login-page">
            <div className="left col">
                <img src={logo} className="logo" alt="Star Wars"/>
            </div>
            <div className="right col">
                <div className="login-card">
                    <LoginForm title='Welcome Sky Walker!'/>
                </div>
            </div>
        </div>
    )
}

export { LoginPage }
export default LoginPage