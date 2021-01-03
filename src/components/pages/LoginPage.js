// Login Page
import useAuth from 'hooks/useAuth'
import { LoginForm, LoginFormFooter } from 'components/ui-components'
import './LoginPage.scss'
import logo from 'assets/img/logo.png'
import github from 'assets/img/github.png'


const LoginPage = () => {
    const { login } = useAuth()


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
                <img src={logo} className="logo" alt="Star Wars" />
            </div>
            <div className="right col">
                <div className="login-card">
                    <LoginForm onLoginSubmit={handleLoginSubmit} title='Welcome Sky Walker!' />
                    <LoginFormFooter>
                        <a href='/' title='Need Help?'>Need Help?</a>
                        <a
                            href='https://github.com/slashnot/starwars-app'
                            target='_blank'
                            rel='noopener noreferrer'
                            title='View Project'
                        >
                            <img className='github' src={github} alt='View project on Git' />
                        </a>
                    </LoginFormFooter>
                </div>
            </div>
        </div>
    )
}

export { LoginPage }
export default LoginPage