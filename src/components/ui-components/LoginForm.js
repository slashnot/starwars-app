// Login form presentation component
import './LoginForm.scss'

const LoginForm = ({ title, onLoginSubmit }) => {

    return (
        <div className="login-form">
            <h4 className='title'>{title}</h4>

            <form name="login-form" className='login-inputs' onSubmit={onLoginSubmit}>
                <label htmlFor='username'>
                    Username
                    <input type='text' name='username' placeholder='Enter your Username' />
                </label>
                <label htmlFor='username'>
                    Password
                    <input type='password' name='password' placeholder='Enter pasword' />
                </label>
                <div className="form-footer">
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

export { LoginForm }
export default LoginForm