// Router wrapper component to handle private routes
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, redirect="/", ...rest }) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') ? JSON.parse(localStorage.getItem('isLoggedIn')) : null

    return (
        <Route {...rest} render={props => (
            !isLoggedIn ?
                <Redirect to={redirect} />
                : <Component {...props} />
        )} />
    );
}
export {PrivateRoute}
export default PrivateRoute