// Login form presentation component
import { useContext } from 'react'
import AppContext from 'store/AppContext'
import './LoginForm.scss'

const LoginForm = ({ title, onLoginSubmit }) => {
    const { appState, appDispatch } = useContext(AppContext)
    const { loginError } = appState

    const clearMessage = () => {
        appDispatch({ type: 'CLEAR_LOGIN_ERROR' })
    }

    return (
        <div className="login-form">
            <h4 className='title'>{title}</h4>

            <form name="login-form" className='login-inputs' onSubmit={onLoginSubmit}>
                <label htmlFor='username'>
                    Username
                    <input onFocus={clearMessage} type='text' name='username' placeholder='Enter your Username' />
                </label>
                <label htmlFor='username'>
                    Password
                    <input onFocus={clearMessage} type='password' name='password' placeholder='Enter pasword' />
                </label>
                <div className="form-footer">
                    <button type='submit'>Login</button>
                </div>
            </form>
            {loginError && <div className='error-messages'>
                {loginError}
            </div>}
        </div>
    )
}

export { LoginForm }
export default LoginForm