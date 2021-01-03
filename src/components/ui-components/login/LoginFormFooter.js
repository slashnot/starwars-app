// Login box footer
import 'components/ui-components/login/LoginFormFooter.scss'

const LoginFormFooter = ({ children, className, ...rest }) => {
    return (
        <div {...rest} className={`${className} login-form-footer`}>
            {children}
        </div>
    )
}

export { LoginFormFooter }
export default LoginFormFooter